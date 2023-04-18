const User = require('../models/User');
const Journey_has_user = require('../models/Journey_has_user');

const userController = {

    findUserWithId: async (req,res) => {
        console.log("----- userController request findUserWithId starts ------");

        const user = await User.findById(req.params.id);
       
        if (user) {
            res.json(user);
        } else {
            res.status(202).json(`utilisateur introuvable`);
        };
    },

    findUserWithUid: async (req,res) => {
        console.log("----- userController request findUserWithUid starts ------");

        const user = await User.findByUid(req.params.uid);
       
        if (user) {
            res.json(user);
        } else {
            res.status(202).json(`utilisateur introuvable`);
        };
    },


    editUser: async (req,res) => {
        console.log("----- userController request editUser starts ------");

        const user = await User.findByUid(req.params.uid);

        if(user){
            const userToEdit = await new User(user);
            userToEdit.update(req.body);
            userToEdit.saveOrEditOneComponent();
            res.status(200).json('Utilisateur mis à jour')
        }else{
            res.status(202).json(`Impossible d'effectuer cette opération`);
        }        
    },

    editUserForRemoval : async (req,res) => {
        console.log("----- userController request editUserForRemoval starts ------");
        const userId = req.params.id;
        const user = await User.findOneComponent(userId);

        if(user){
            // chercher les trajets auxquels le user est enregistré dans journey_has_user
            const userJourneys = await Journey_has_user.findOneUserAllJourneys(userId);
            // console.log("userJourneys: ", userJourneys);

            if (userJourneys.length>0){
                const userJourneysToDeactivate = await new Journey_has_user(userJourneys[0]);
                userJourneysToDeactivate.deactivateStatus(userId);
                console.log('Désactivation des trajets du user OK');
            }

            const userToDeactivate = await new User(user);
            const userDeactivated = userToDeactivate.editUserForRemoval(userId);
            res.status(200).json("Utilisateur désactivé");
        }
        
    },

    showUserJourneyDetail : async (req,res) =>{
        console.log("----- Controller request showUserJourneyDetail -----");

        const id = req.params.id;
        
        const userJourneys = await User.findJourneyDetail(id);
        if(userJourneys) {
            res.json(userJourneys);
        } else {
            res.status(202).json(`pas de voyages trouvés pour cet utilisateur`);
        }
    },

    deleteOneUser: async (req,res)=>{
        console.log("----- Controller request deleteOneUser -----");

        const userId = req.params.id;
        const user = await User.findOneComponent(userId);

        if (user){
            // chercher les trajets auxquels le user est enregistré dans journey_has_user
            const userJourneys = await Journey_has_user.findOneUserAllJourneys(userId);
            console.log("userJourneys : ", userJourneys[0]);
            
            if(userJourneys) {
                const userJourneysToDisable = new Journey_has_user(userJourneys[0]);
                console.log("userJourneysToDisable : ", userJourneysToDisable);

                // FINIR DE MANIERE A FAIRE UN UPDATE pour désactiver les infos du user + supprimer les infos sensibles     

                // await userJourneysToDelete.deleteOneUserFormAllJourney();
                // res.json("désinscription des trajets effectuée");
            }

            // const userToDelete = new User(user);
            // await userToDelete.delete();
            // res.json("utilisateur supprimé")
        } else {
            res.status(404).json('utilisateur introuvable');
        }
    }

};

module.exports = userController;