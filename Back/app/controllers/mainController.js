const Journey = require('../models/Journey');


const mainController = {
    home: async (_,res) => {
        await res.json('toto')
    },

    showAllJourneys: async (_,res) =>{
        const journeysList = await Journey.findAlljourneys();

        if (journeysList) {
            res.json(journeysList);
        } else {
            res.status(404).json('Il n\'existe pas de trajets');
        };
    },

    showOneJourney: async (req,res) =>{
        const journeyId = req.params.id;
        const journeySelected = await Journey.findOneJourney(journeyId);

        if (journeySelected) {
            console.log(journeySelected);
            res.json(journeySelected);
        } else {
            res.status(404).json('Ce trajet n\'existe pas');
        };
    },

    AddOneJourney: async (req,res) =>{
        const newJourney = new Journey(req.body);
        await newJourney.saveOneJourney();
        res.json(newJourney);        
    }

};

module.exports = mainController;