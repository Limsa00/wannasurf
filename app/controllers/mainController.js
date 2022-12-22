const Journey = require('../models/Journey');


const mainController = {
    home: async (_,res) => {
        await res.json('toto')
    },

    showJourneys: async (req,res) =>{
        journeysList = await Journey.findAlljourneys();

        if (journeysList) {
            res.json(journeysList);
        } else {
            res.status(404).json('Il n\'existe pas de trajets');
        };
    }
};

module.exports = mainController;