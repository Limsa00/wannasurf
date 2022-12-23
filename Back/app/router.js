const express = require('express');
const mainController = require('./controllers/mainController');

const router = express.Router();

router.get('/', mainController.home);
router.get('/journeys', mainController.showAllJourneys);
router.get('/journeys/:id', mainController.showOneJourney);


router.post('/journeys', mainController.AddOneJourney);

module.exports = router;