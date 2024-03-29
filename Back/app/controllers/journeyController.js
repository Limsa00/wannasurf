const Journey = require('../models/Journey');


const journeyController = {

    showAllJourneys: async (_,res) =>{
        console.log("----- Controller request showAllJourneys -----")

        const journeysList = await Journey.findAlljourneys();

        if (journeysList) {
            res.json(journeysList);
        } else {
            res.status(404).json('Il n\'existe pas de trajets');
        };
    },

    showOneJourney: async (req,res) =>{
        console.log("----- Controller request showOneJourney -----")

        const journeyId = req.params.id;
        const journeySelected = await Journey.findOneJourney(journeyId);

        if (journeySelected) {
            res.json(journeySelected);
        } else {
            res.status(404).json('Ce trajet n\'existe pas');
        };
    },

    addOneJourney: async (req,res) =>{
        console.log("----- Controller request addOneJourney -----")

        const newJourney = new Journey(req.body);
        const addedJourneyId = await newJourney.saveOneJourney();

        // Insère toutes les propriétés de newJourney dans newJourney2 sauf _id
        const {_id, ...newJourney2} = newJourney; 

        // Rassemble les propriétés des objets addedJourneyId et newJourney2 dans un seul objet dans l'objectif de retourner l'enregistrement inséré avec l'id retourné par la BDD
        res.json({...addedJourneyId,...newJourney2});
        //res.json(addedJourneyId);   
    },

    deleteOneJourney: async (req,res) => {
        console.log("----- Controller request deleteOneJourney -----");

        const journey= await Journey.findOneJourney(req.params.id);
        if (journey) {
            const journeyToDelete = new Journey(journey);
            await journeyToDelete.delete();
            res.json("suppression effectuée");
        } else{
            res.status(404).json('ce trajet n\'existe pas');
        }
    },

    showJourneysFiltered: async (req,res) => {
        console.log(`----- Controller request showJourneysFiltered for ${req.query.date} & a minimum of ${req.query.place} place available -----`);

        const date = new Date();
        const dateNow = date.getTime();
        let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

        let { date:dateWanted, place:nbPlaceWanted } = req.query;

        (!nbPlaceWanted || isNaN(nbPlaceWanted)) ? nbPlaceWanted=0 : nbPlaceWanted; // Contrôler la valeur entrante et configurer le nombre de places minimum à 0
        (Date.parse(dateWanted)<dateNow || isNaN(Date.parse(dateWanted))) ? dateWanted=currentDate : dateWanted; // Contrôler la valeur entrante et configurer la recherche uniquement pour la date >= aujourd'hui
 
        const journeySearch = await Journey.findJourneysFiltered(nbPlaceWanted,dateWanted);

        if (journeySearch.length>0) {
            res.json(journeySearch);
        } else {
            res.status(404).json('Il n\'existe pas de trajets pour cette recherche'); //status 404 géré par le front pour afficher réponse en fonction du statut envoyé
            // res.json('Il n\'existe pas de trajets pour cette recherche');
        };
    }
};

module.exports = journeyController;