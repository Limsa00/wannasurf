const express = require('express');
const journeyController = require('./controllers/journeyController');
const loginController = require('./controllers/loginController');
const mainController = require('./controllers/mainController');
const authMW = require('./services/authMW')


const router = express.Router();

router.get('/journeySearch', journeyController.showJourneysFiltered);
router.get('/user/:uid', loginController.findUserWithUid);


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
router.delete('/:entity/:id', mainController.deleteOneComponent);

module.exports = router;