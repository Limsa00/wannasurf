const express = require('express');
const journeyController = require('./controllers/journeyController');
const userController = require('./controllers/userController');
const mainController = require('./controllers/mainController')
const journey_has_userController = require('./controllers/journey_has_userController');

const authMW = require('./services/authMW')

const router = express.Router();

// Rechercher les trajets à partir de la date et des places dispos
router.get('/journeySearch', journeyController.showJourneysFiltered);
// Afficher Trajets d'un User avec tous les détails
router.get('/myTravels/:id', userController.showUserJourneyDetail);

router.get('/user/:uid', userController.findUserWithUid);
router.patch('/user/:uid', userController.editUser);

// Afficher la liste des passagers dans un trajet
router.get('/journey_has_user/:id', journey_has_userController.showOneJourneyUsers);
// Afficher la liste des trajets auxquels est inscrit un passager 
router.get('/user_has_journey/:id', journey_has_userController.showOneUserJourneys);
// Afficher 1 trajet et 1 passager
router.get('/journey_has_user/:journeyId/:userId', journey_has_userController.showOneUserOneJourney);

// S'inscrire dans un trajet
router.post('/journey_has_user', journey_has_userController.addOneUserToJourney);
// Se désinscrire d'un trajet
router.delete('/journey_has_user/:journeyId/:userId', journey_has_userController.deleteOneUserFromJourney);

// router.get('/journeys', journeyController.showAllJourneys);
// router.get('/journeys/:id', journeyController.showOneJourney);
// router.post('/journeys', journeyController.addOneJourney);
// router.delete('/journeys/:id', journeyController.deleteOneJourney);

// router.get('/isLogged', userController.loginCheck);
// router.get('/logout', userController.doLogout);
// router.post('/login', userController.doLogin);
// router.post('/signup', userController.doSignup);
// router.delete('/users/:id', userController.deleteOneUser);

// Factoring routes for models : journey, user
router.get('/:entity', mainController.showAllComponents);
router.get('/:entity/:id', mainController.showOneComponent);
router.post('/:entity', /*authMW,*/ mainController.addOneComponent);
router.patch('/:entity/:id', mainController.editOneComponent);
router.delete('/:entity/:id', mainController.deleteOneComponent);

module.exports = router;