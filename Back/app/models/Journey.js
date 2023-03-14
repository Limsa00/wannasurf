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
        INSERT INTO journey ("departure_city", "destination_surfspot_or_city", "meeting_address", "departure_date", "departure_time", "price", "place_available", "number_of_boards_allowed", "board_size_allowed","number_of_boards_loaded","driver")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING id;
        `, [
            this.departure_city,
            this.destination_surfspot_or_city,
            this.meeting_address,
            this.departure_date,
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

    static async findJourneysFiltered(nb_place,date) {
        const query = `
        SELECT 
            journey.id AS journey_id,
            departure_date::date AS "date",
            driver_id,
            firstname AS driver_firstname,
            lastname AS "driver_lastname",
            "cityName" AS city,
            meeting_address AS address,
            "surfspotName" AS surfspot,
            departure_time AS "time",
            price,
            place_available AS places_offered,	
            COALESCE(nb_passengers,0) AS places_booked,
            COALESCE((place_available - nb_passengers), place_available) AS places_remaining		
        FROM journey
        LEFT JOIN nb_place_booked on journey.id = nb_place_booked."journey_id"
        JOIN city ON journey.departure_city_id = city.id
        JOIN surfspot ON journey.destination_surfspot_or_city_id = surfspot.id
        JOIN "user" ON journey.driver_id = "user".id
        WHERE COALESCE((place_available - nb_passengers), place_available)>= $1
        AND departure_date::date = $2;`;

        const allJourneysFiltered = await db.query (query,[nb_place,date]);

        return allJourneysFiltered.rows;
    }
}

module.exports = Journey;