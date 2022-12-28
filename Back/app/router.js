const express = require('express');
const journeyController = require('./controllers/journeyController');
const loginController = require('./controllers/loginController');


const router = express.Router();

router.get('/journeys', journeyController.showAllJourneys);
router.get('/journeys/:id', journeyController.showOneJourney);
router.post('/journeys', journeyController.addOneJourney);
router.delete('/journeys/:id', journeyController.deleteOneJourney);

router.get('/isLogged', loginController.loginCheck);
router.get('/logout', loginController.doLogout);
router.post('/login', loginController.doLogin);
router.post('/signup', loginController.doSinup);
router.delete('/users/:id', loginController.deleteOneUser);



module.exports = router;