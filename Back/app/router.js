const express = require('express');
const journeyController = require('./controllers/journeyController');
const loginController = require('./controllers/loginController');
const mainController = require('./controllers/mainController');
const journey_has_userController = require('./controllers/journey_has_userController');

const authMW = require('./services/authMW')


const router = express.Router();

router.get('/journeySearch', journeyController.showJourneysFiltered);

router.get('/user/:uid', loginController.findUserWithUid);
router.patch('/user/:uid', loginController.editUser);

router.get('/journey_has_user/:id', journey_has_userController.showOneJourneyUsers);
router.get('/user_has_journey/:id', journey_has_userController.showOneUserJourneys);

// router.get('/journeys', journeyController.showAllJourneys);
// router.get('/journeys/:id', journeyController.showOneJourney);
// router.post('/journeys', journeyController.addOneJourney);
// router.delete('/journeys/:id', journeyController.deleteOneJourney);

// router.get('/isLogged', loginController.loginCheck);
// router.get('/logout', loginController.doLogout);
// router.post('/login', loginController.doLogin);
// router.post('/signup', loginController.doSignup);
// router.delete('/users/:id', loginController.deleteOneUser);

// Factoring routes for models : journey, user
router.get('/:entity', mainController.showAllComponents);
router.get('/:entity/:id', mainController.showOneComponent);
router.post('/:entity', /*authMW,*/ mainController.addOneComponent);
router.patch('/:entity/:id', mainController.editOneComponent);
router.delete('/:entity/:id', mainController.deleteOneComponent);

module.exports = router;