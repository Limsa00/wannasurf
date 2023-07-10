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

/**
 * @swagger
 * /journeySearch:
 *   get:
 *     summary: Search for journeys based on date and available seats
 *     tags: [Journey]
 *     parameters:
 *       - in: query
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: seats
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *     responses:
 *       200:
 *         description: Returns the filtered list of journeys
 */

/**
 * @swagger
 * /myTravels/{id}:
 *   get:
 *     summary: Get detailed information about a user's journeys
 *     tags: [Journey]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns detailed information about the user's journeys
 */

/**
 * @swagger
 * /userId/{id}:
 *   get:
 *     summary: Find a user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the user with the specified ID
 */

/**
 * @swagger
 * /userUid/{uid}:
 *   get:
 *     summary: Find a user by UID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the user with the specified UID
 */

/**
 * @swagger
 * /user/{uid}:
 *   patch:
 *     summary: Edit a user's information
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the updated user information
 */

/**
 * @swagger
 * /user/deactivate/{id}:
 *   patch:
 *     summary: Edit a user's information for removal
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the updated user information
 */

/**
 * @swagger
 * /journey_has_user/{id}:
 *   get:
 *     summary: Get the list of passengers in a journey
 *     tags: [JourneyHasUser]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the list of passengers in the journey
 */

/**
 * @swagger
 * /user_has_journey/{id}:
 *   get:
 *     summary: Get the list of journeys a user is registered in
 *     tags: [JourneyHasUser]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the list of journeys for the user
 */

/**
 * @swagger
 * /journey_has_user/{journeyId}/{userId}:
 *   get:
 *     summary: Get a specific journey and passenger
 *     tags: [JourneyHasUser]
 *     parameters:
 *       - in: path
 *         name: journeyId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the specified journey and passenger
 */

/**
 * @swagger
 * /journey_has_user:
 *   post:
 *     summary: Add a user to a journey
 *     tags: [JourneyHasUser]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/journeyHasUserSchema'
 *     responses:
 *       200:
 *         description: Returns the added user and journey information
 */

/**
 * @swagger
 * /journey_has_user/{journeyId}/{userId}:
 *   delete:
 *     summary: Remove a user from a journey
 *     tags: [JourneyHasUser]
 *     parameters:
 *       - in: path
 *         name: journeyId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a success message
 */

/**
 * @swagger
 * /journey:
 *   post:
 *     summary: Create a new journey
 *     tags: [Journey]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/newJourneySchema'
 *     responses:
 *       200:
 *         description: Returns the created journey information
 */

/**
 * @swagger
 * /{entity}:
 *   get:
 *     summary: Get all components of a specific entity
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: entity
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the list of components for the specified entity
 */

/**
 * @swagger
 * /{entity}/{id}:
 *   get:
 *     summary: Get a specific component of an entity
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: entity
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the specified component
 */

/**
 * @swagger
 * /{entity}:
 *   post:
 *     summary: Add a new component to an entity
 *     tags: [Entity]
 *     parameters:
 *```javascript
/**
 * @swagger
 * /{entity}:
 *   post:
 *     summary: Add a new component to an entity
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: entity
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/componentSchema'  // Replace "componentSchema" with the actual schema for your component
 *     responses:
 *       200:
 *         description: Returns the added component
 */

/**
 * @swagger
 * /{entity}/{id}:
 *   patch:
 *     summary: Edit a specific component of an entity
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: entity
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/componentSchema'  // Replace "componentSchema" with the actual schema for your component
 *     responses:
 *       200:
 *         description: Returns the updated component
 */

/**
 * @swagger
 * /{entity}/{id}:
 *   delete:
 *     summary: Delete a specific component of an entity
 *     tags: [Entity]
 *     parameters:
 *       - in: path
 *         name: entity
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a success message
 */



module.exports = router;