const express = require('express');
const journeyController = require('./controllers/journeyController');
const userController = require('./controllers/userController');
const mainController = require('./controllers/mainController')
const journey_has_userController = require('./controllers/journey_has_userController');

const { validateBody, validateQuery } = require('./services/validator');
const journeyHasUserSchema = require('./schemas/journeyHasUserSchema');
const journeySearchSchema = require('./schemas/journeySearchSchema');
const newJourneySchema = require('./schemas/newJourneySchema');

const authMW = require('./services/authMW')
const entityToUseControl = require('./services/getEntityToUse');

const router = express.Router();

// Rechercher les trajets à partir de la date et des places dispos
router.get('/journeySearch', validateQuery(journeySearchSchema),journeyController.showJourneysFiltered);
// Afficher Trajets d'un User avec tous les détails
router.get('/myTravels/:id', userController.showUserJourneyDetail);

router.get('/userId/:id',userController.findUserWithId);
router.get('/userUid/:uid', userController.findUserWithUid);
router.patch('/user/:uid', userController.editUser);
router.patch('/user/deactivate/:id', userController.editUserForRemoval);

// Afficher la liste des passagers dans un trajet
router.get('/journey_has_user/:id', journey_has_userController.showOneJourneyUsers);
// Afficher la liste des trajets auxquels est inscrit un passager 
router.get('/user_has_journey/:id', journey_has_userController.showOneUserJourneys);
// Afficher 1 trajet et 1 passager
router.get('/journey_has_user/:journeyId/:userId', journey_has_userController.showOneUserOneJourney);

// S'inscrire dans un trajet
router.post('/journey_has_user', validateBody(journeyHasUserSchema), journey_has_userController.addOneUserToJourney);
//router.post('/journey_has_user', journey_has_userController.addOneUserToJourney);

// Se désinscrire d'un trajet
router.delete('/journey_has_user/:journeyId/:userId', journey_has_userController.deleteOneUserFromJourney);
// Créer un trajet
router.post('/journey', /*authMW,*/ validateBody(newJourneySchema), journeyController.addOneJourney);


// Factoring routes for models : journey, user
router.get('/:entity', entityToUseControl, mainController.showAllComponents);
router.get('/:entity/:id', entityToUseControl, mainController.showOneComponent);
router.post('/:entity', /*authMW,*/ entityToUseControl, mainController.addOneComponent);
router.patch('/:entity/:id', entityToUseControl, mainController.editOneComponent);
router.delete('/:entity/:id', entityToUseControl, mainController.deleteOneComponent);

module.exports = router;