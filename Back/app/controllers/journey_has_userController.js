const Journey_has_user = require('../models/Journey_has_user');
const Journey = require('../models/Journey');
const { error } = require('../schemas/journeyHasUserSchema');


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

        const { userId:userId, journeyId:journeyId } = req.params;
        const userSelected = await Journey_has_user.findOneUserOneJourney(journeyId,userId);

        if (userSelected) {
            res.json(userSelected);
        } else {
            res.status(404).json('Cet utilisateur ou ce trajet n\'existe pas');
        };
    },

    addOneUserToJourney: async (req,res) => {
        console.log("----- Controller request addOneUserToJourney -----");

        const { user_id: userId, journey_id: journeyId } = req.body;

        // Vérifier si le driver n'essaie de s'inscrire sur son propre trajet
        const journeyInfo = await Journey.findOneJourney(journeyId);
        if (journeyInfo.driver_id === userId){
            res.status(400).json("Vous ne pouvez pas vous inscrire à votre propre trajet");
            return
        }

        // Vérifier si l'utilisateur n'est pas déjà inscrit sur ce trajet
        const userInJourney = await Journey_has_user.findOneUserOneJourney(journeyId, userId);
        if (userInJourney){
            res.status(202).json('Vous êtes déjà inscrit à ce trajet');
            return
        }

        // Vérifier la place restante sur ce trajet
        const placeLeft = await Journey_has_user.checkPlaceAvailability(journeyId);
        if(placeLeft.nb_place_left<1){
            res.status(202).json('Il n\'y a plus de place disponible dans ce trajet');
            return
        }

        // Si la place restante est suffisante et l'utilisateur n'est pas inscrit sur le trajet, effectuer inscription
        if (!userInJourney && placeLeft.nb_place_left>0) {
        const newUserToJourney = new Journey_has_user (req.body);
            const addedUserToJourney = await newUserToJourney.saveOneUserToJourney();
            res.json(addedUserToJourney);
        } else {
            console.log("inscription impossible")
        }
    },

    deleteOneUserFromJourney: async (req,res) =>{
        console.log("----- Controller request deleteOneUserFromJourney -----");

        const { userId:userId, journeyId:journeyId } = req.params;

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