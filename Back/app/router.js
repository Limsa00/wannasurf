const express = require('express');
const mainController = require('./controllers/mainController');
const loginController = require('./controllers/loginController');


const router = express.Router();

router.get('/journeys', mainController.showAllJourneys);
router.get('/journeys/:id', mainController.showOneJourney);
router.post('/journeys', mainController.addOneJourney);
router.delete('/journeys/:id', mainController.deleteOneJourney);


router.post('/login', loginController.doLogin);
router.get('/isLogged', loginController.loginCheck);
router.post('/signup', loginController.doSinup);



module.exports = router;