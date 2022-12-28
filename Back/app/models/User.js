const db = require('../database');
const CoreModel = require('./CoreModel');

class User extends CoreModel {

    static tableName = 'user';

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

}

module.exports = User;