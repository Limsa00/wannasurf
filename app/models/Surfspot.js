const db = require('../database');
const CoreModel = require('./CoreModel');

class Surfspot extends CoreModel {

    static tableName = 'surfspot';

    constructor (data) {
        super(data);
        for (const prop in data){
            this[prop] = data[prop];
        }
    }
}

module.exports = Surfspot;