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

    async saveOneUserToJourney() {
        const insertedUserToJourney = await db.query(`
        INSERT INTO journey_has_user ("journey_id", "user_id")
        VALUES ($1, $2)
        RETURNING "journey_id", "user_id";
        `, [
            this.journey_id,
            this.user_id
        ]);

        return insertedUserToJourney.rows[0];
    }
}

module.exports = Journey_has_user;