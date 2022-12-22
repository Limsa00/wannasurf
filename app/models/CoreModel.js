const db = require('../database');

class CoreModel {
    _id;

    constructor (data) {
       this._id = data.id;
    }

    get id() {
        return this._id ;
    }

    set id(value) {
        if (isNaN(parseInt(value,10))) {
            throw Error("L'id du core model doit être un entier");
        }
        this._id = value;
    }

    async delete() {
        await db.query(`DELETE FROM ${this.constructor.tableName} WHERE id = $1 ;`, [this.id]);
    }
}

module.exports = CoreModel ;