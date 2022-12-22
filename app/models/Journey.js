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
        const journeys = await db.query (`SELECT * FROM journey;`);
        return journeys;
    }
}

module.exports = Journey;