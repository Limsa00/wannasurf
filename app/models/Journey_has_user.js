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

    static async checkPlaceAvailability (journeyId) {
        const placeAvailable = await db.query(`SELECT nb_place_left FROM traject_place_left WHERE journey_id = $1;`, [journeyId]);
        return placeAvailable.rows[0];
    }

    async saveOneUserToJourney() {
        const insertedUserToJourney = await db.query(`
            INSERT INTO journey_has_user ("journey_id", "user_id") VALUES ($1, $2) RETURNING "journey_id", "user_id";`, 
            [this.journey_id,this.user_id]
        );
        return insertedUserToJourney.rows[0];
    }

    async deleteOneUserFromOneJourney() {
        await db.query(`DELETE FROM journey_has_user WHERE "journey_id"=$1 AND "user_id"=$2;`, [this.journey_id,this.user_id]);
    }

    async deleteOneUserFormAllJourney() {
        await db.query(`DELETE FROM "user" WHERE user_id = $1;`, [this.id]);
    }

    async deactivateStatus(id) {
        await db.query(`UPDATE journey_has_user SET "inscription-status"=false WHERE user_id=$1 returning journey_id;`, [id]);
    }
}

module.exports = Journey_has_user;