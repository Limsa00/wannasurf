const db = require('../database');
const CoreModel = require('./CoreModel');

class Journey_has_user extends CoreModel {

    static tableName = 'journey_has_user';

    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    static async findOneJourneyUsers(journeyId) {
        const oneJourney_has_user = await db.query (`SELECT * FROM journey_has_user WHERE journey_id=$1;`, [journeyId]);
        return oneJourney_has_user.rows;
    }

    static async findOneUserJourneys (userId) {
        const oneUser_has_journey = await db.query (`SELECT * FROM journey_has_user WHERE user_id=$1;`, [userId]);
        return oneUser_has_journey.rows;
    }
}

module.exports = Journey_has_user;