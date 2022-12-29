const db = require('../database');
const CoreModel = require('./CoreModel');

class Journey extends CoreModel {

    static tableName = 'journey';

    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    static async findAlljourneys() {
        const allJourneys = await db.query (`SELECT * FROM journey;`);
        return allJourneys.rows;
    }

    static async findOneJourney(journeyId) {
        const oneJourney = await db.query (`SELECT * FROM journey WHERE id=$1;`, [journeyId]);
        return oneJourney.rows[0];
    }

    async saveOneJourney() {
        const insertedJourney = await db.query(`
        INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded","driver")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING id;
        `, [
            this.departure_city,
            this.destination_surfspot_or_city,
            this.meeting_address,
            this.departure_time,
            this.price,
            this.place_available,
            this.number_of_boards_allowed,
            this.board_size_allowed,
            this.number_of_boards_loaded,
            this.driver
        ]);

        return insertedJourney.rows[0];
    }
}

module.exports = Journey;