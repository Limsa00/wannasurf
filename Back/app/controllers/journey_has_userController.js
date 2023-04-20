const Journey_has_user = require('../models/Journey_has_user');


const journeyController = {

    showOneJourneyUsers: async (req,res) =>{
        console.log("----- Controller request showOneJourneyUsers -----");

        const journeyId = req.params.id;
        const journeySelected = await Journey_has_user.findOneJourneyAllUsers(journeyId);

        if (journeySelected) {
            res.json(journeySelected);
        } else {
            res.status(404).json('Ce trajet ne comprend pas de user');
        };
    },

    showOneUserJourneys: async (req,res) =>{
        console.log("----- Controller request showOneUserJourneys -----");

        const userId = req.params.id;
        const userSelected = await Journey_has_user.findOneUserAllJourneys(userId);

        if (userSelected) {
            res.json(userSelected);
        } else {
            res.status(404).json('Cet utilisateur n\'est inscrit sur aucun trajet');
        };
    },

    showOneUserOneJourney: async (req,res) =>{
        console.log("----- Controller request showOneUserOneJourney -----");

        const userId = req.params.userId;
        const journeyId = req.params.journeyId;

        const userSelected = await Journey_has_user.findOneUserOneJourney(journeyId,userId);

        if (userSelected) {
            res.json(userSelected);
        } else {
            res.status(404).json('Cet utilisateur ou ce trajet n\'existe pas');
        };
    },

    addOneUserToJourney: async (req,res) => {
        console.log("----- Controller request addOneUserToJourney -----");

        const userId = req.body.user_id;
        const journeyId = req.body.journey_id;
      
        // Contrôler s'il existe au moins 1 record relatif à journey_id dans Journey_has_user
        const journeyHasPassenger = await Journey_has_user.findOneJourneyAllUsers(journeyId);
        if(journeyHasPassenger.length>0) {
            const userInJourney = await Journey_has_user.findOneUserOneJourney(journeyId, userId);
            // Et Vérifier si l'utilisateur est déjà inscrit 
            if(userInJourney){
                res.status(202).json('Vous êtes déjà inscrit à ce trajet');
                // return
            } else {
                // Et vérifier s'il reste de la place disponible 
                const placeLeft = await Journey_has_user.checkPlaceAvailability(journeyId);
                if(placeLeft.nb_place_left<1){
                    res.status(202).json('Il n\'y a plus de place disponible dans ce trajet');
                    // return
                }
            }
        } else {
            // Si tous les contrôles précédents sont passés, on peut alors enregistrer l'utilisateur sur le trajet
            const newUserToJourney = new Journey_has_user (req.body);
            const addedUserToJourney = await newUserToJourney.saveOneUserToJourney();
            res.json(addedUserToJourney);
        }
    },

    deleteOneUserFromJourney: async (req,res) =>{
        console.log("----- Controller request deleteOneUserFromJourney -----");

        const userId = req.params.userId;
        const journeyId = req.params.journeyId;

        const user = await Journey_has_user.findOneUserOneJourney(journeyId,userId);
        if (user) {
            const userToDeleteFromJourney = new Journey_has_user(user);
            await userToDeleteFromJourney.deleteOneUserFromOneJourney();
            res.json("suppression effectuée");
        } else{
            res.status(404).json('Cet utilisateur ou ce trajet n\'existe pas');
        }
    }
};

module.exports = journeyController;