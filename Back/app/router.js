const express = require('express');
const journeyController = require('./controllers/journeyController');
const userController = require('./controllers/userController');
const mainController = require('./controllers/mainController');
const authMW = require('./services/authMW')


const router = express.Router();

router.get('/journeySearch', journeyController.showJourneysFiltered);

router.get('/user/:uid', userController.findUserWithUid);
router.patch('/user/:uid', userController.editUser);


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