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
}

module.exports = Journey_has_user;