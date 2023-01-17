const Journey = require('../models/Journey');
const User = require('../models/User');


const objectModel = [Journey, User];

const mainController = {

    showAllComponents: async (req,res) =>{
        console.log(`----- Controller request showAllComponents for ${req.params.entity} -----`)

        const entity = req.params.entity;
        let entityToUse;

        for (let i = 0; i < objectModel.length; i++) {
            if (entity === objectModel[i].tableName) {
                entityToUse = objectModel[i];
            }
        };

        const componentsList = await entityToUse.findAllComponents();

        if (componentsList) {
            res.json(componentsList);
        } else {
            res.status(404).json(`Il n\'existe pas de composant pour ${entity}`);
        };
    },
}

module.exports = mainController;