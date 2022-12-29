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

    static async findById(id) {
        const user = await db.query ('SELECT * FROM "user" WHERE id=$1', [id]);
        return user.rows[0];
    }

    async saveOneUser() {
        const insertedUser = await db.query(`
        INSERT INTO "user"("firstname","lastname","gender","phone","email","city","password")
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id;
        `, [
            this.firstname,
            this.lastname,
            this.gender,
            this.phone,
            this.email,
            this.city,
            this.password
        ]);

        return insertedUser.rows[0];
    }
}

module.exports = User;