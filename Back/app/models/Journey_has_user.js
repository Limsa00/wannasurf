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

    static async findOneJourneyAllUsers(journeyId) {
        const oneJourney_has_user = await db.query (`SELECT * FROM journey_has_user WHERE journey_id=$1;`, [journeyId]);
        return oneJourney_has_user.rows;
    }

    static async findOneUserAllJourneys (userId) {
        const oneUser_has_journey = await db.query (`SELECT * FROM journey_has_user WHERE user_id=$1;`, [userId]);
        return oneUser_has_journey.rows;
    }

    static async findOneUserOneJourney (journeyId, userId) {
        const oneUser_has_journey = await db.query (`SELECT * FROM journey_has_user WHERE journey_id=$1 AND user_id=$2;`, [journeyId, userId]);
        return oneUser_has_journey.rows[0];
    }

    async saveOneUserToJourney() {
        const checkUserToJourney = await db.query(`
        SELECT "user_id" FROM journey_has_user WHERE "user_id"=$1 AND "journey_id"=$2;`,[this.user_id, this.journey_id])

        console.log(checkUserToJourney.rowCount)
        if (checkUserToJourney.rowCount > 0) {
             return 'error'
        } else {
            const insertedUserToJourney = await db.query(`
            INSERT INTO journey_has_user ("journey_id", "user_id")
            VALUES ($1, $2)
            RETURNING "journey_id", "user_id";
             `, [
             this.journey_id,
             this.user_id
         ]);
             return 'success'
         }

        return insertedUserToJourney.rows[0];
    }

    async deleteOneUserFromOneJourney() {
        await db.query(`DELETE FROM journey_has_user WHERE "journey_id"=$1 AND "user_id"=$2;`, [this.journey_id,this.user_id]);
    }
}

module.exports = Journey_has_user;