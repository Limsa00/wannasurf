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

    static async findAllComponents(){
        let allComponents;

        if (this.tableName === "user") {
            allComponents = await db.query ('SELECT * FROM "user";');
        } else{
            allComponents = await db.query (`SELECT * FROM ${this.tableName};`);
        }
        return allComponents.rows;
    }

    static async findOneComponent(id){
        let oneComponent;

        if (this.tableName === "user") {
            oneComponent = await db.query (`SELECT * FROM "user" WHERE id=$1;`, [id]);
        } else{
            oneComponent = await db.query (`SELECT * FROM ${this.tableName} WHERE id=$1;`, [id]);
        }
        return oneComponent.rows[0];
    }

    async delete() {
        await db.query(`DELETE FROM "${this.constructor.tableName}" WHERE id = $1 ;`, [this.id]);
    }
}

module.exports = CoreModel ;