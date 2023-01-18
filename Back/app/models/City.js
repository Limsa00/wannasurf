const db = require('../database');
const CoreModel = require('./CoreModel');

class City extends CoreModel {

    static tableName = 'city';

    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }
}

module.exports = City;