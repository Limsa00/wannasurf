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

    async saveOrEditOneComponent(){

        const fieldNames = []; // clés
        const fieldValues = []; // valeurs
        const fieldIndex = []; // index
        const fieldConcat = []; // requête au format SQL

        let index = 1 ; 
        let insert;

        for (let fieldName in this) {
            if (fieldName === "_id") {
                continue;
            }
            
            fieldNames.push(`"${fieldName}"`);
            fieldValues.push(this[fieldName]);
            fieldIndex.push("$" + index);
            fieldConcat.push(fieldNames[index-1] + " = " + fieldIndex[index-1]);
            index ++;
        };   

        // Si dans le controller, la méthode findOneComponent renvoie une correspondance, c'est que cette instance existe déjà dans la BDD et qu'elle a donc un id. C'est pour cette raison qu'on contrôle l'existence d'un id dans l'instance en cours. Ainsi, il s'agit ensuite de  mettre à jour cette instance
        if (this.id) {
            fieldValues.push(this.id);
            if (this.constructor.tableName === "user") {
                insert = await db.query(`
                UPDATE "user" SET ${fieldConcat.join(", ")} 
                WHERE id = $${fieldNames.length + 1};`
                , fieldValues);
            } else{
                insert = await db.query(`
                UPDATE ${this.constructor.tableName} SET ${fieldConcat.join(", ")} 
                WHERE id = $${fieldNames.length + 1};`
                , fieldValues);
            }            
        // Sinon il n'existe pas de correspondance et il faudra donc créer un nouvel enregistrement en BDD
        } else {
            if (this.constructor.tableName === "user") {
               insert = await db.query(`
                INSERT INTO "user" (${fieldNames.join(", ")})
                VALUES (${fieldIndex.join(", ")})
                RETURNING id;`
                , fieldValues);
            } else{
                insert = await db.query(`
                INSERT INTO ${this.constructor.tableName} (${fieldNames.join(", ")})
                VALUES (${fieldIndex.join(", ")})
                RETURNING id;`
                , fieldValues);
            }                   

            return insert.rows[0];
        }
    }

    async delete() {
        await db.query(`DELETE FROM "${this.constructor.tableName}" WHERE id = $1 ;`, [this.id]);
    }
}

module.exports = CoreModel ;