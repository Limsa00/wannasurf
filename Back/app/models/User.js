const db = require('../database');
const CoreModel = require('./CoreModel');

class User extends CoreModel {

    static tableName = "user";

    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }

    static async findByEmail(email) {
        const user = await db.query ('SELECT * FROM "user" WHERE email=$1', [email]);
        return user.rows[0];
    }

    static async findByUid(uid) {
        const user = await db.query ('SELECT * FROM "user" WHERE uid=$1', [uid]);
        return user.rows[0];
    }

    // A FINIR (requête pour obtenir liste des trajets d'un user)
    // SELECT
    //     journey.id AS journey_id,
    //     driver_user.id AS driver_id,
    //     driver_user.firstname AS driver_firstname,
    //     driver_user.lastname AS driver_lastname,
    //     residence_city."cityName" AS start_city,
    //     surfspot."surfspotName" AS surfspot,
    //     surfspot_city."cityName" AS surfspot_city,
    //     journey.price,
    //     journey_has_user.user_id AS passenger_id,
    //     passenger_user.firstname AS passenger_firstname,
    //     passenger_user.lastname AS passenger_lastname
    // FROM journey
    // JOIN "user" AS driver_user ON journey.driver_id = driver_user.id
    // JOIN journey_has_user ON journey.id = journey_has_user.journey_id
    // JOIN "user" AS passenger_user ON journey_has_user.user_id = passenger_user.id
    // JOIN city AS residence_city ON journey.departure_city_id = residence_city.id
    // JOIN surfspot ON journey.destination_surfspot_or_city_id = surfspot.id
    // JOIN city AS surfspot_city ON surfspot.city_id = surfspot_city.id
    // ORDER BY journey_id ASC, passenger_id ASC



    async saveOneUser() {
        const insertedUser = await db.query(`
        INSERT INTO "user"("firstname","lastname","gender","phone","birthday","email","city","password")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id;
        `, [
            this.firstname,
            this.lastname,
            this.gender,
            this.phone,
            this.birthday,
            this.email,
            this.city,
            this.password
        ]);

        return insertedUser.rows[0];
    }
}

module.exports = User;