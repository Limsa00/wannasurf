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

    showOneComponent: async (req,res) =>{
        console.log(`----- Controller request showOneComponent for ${req.params.entity}:${req.params.id} -----`)

        const id = req.params.id;
        const entity = req.params.entity;

        let entityToUse;
        for (let i = 0; i < objectModel.length; i++) {
            if (entity === objectModel[i].tableName) {
                entityToUse = objectModel[i];
            }
        };

        const component = await entityToUse.findOneComponent(id);

        if (component) {
            res.json(component);
        } else {
            res.status(404).json(`Il n\'existe pas de composant pour ${entity}:${id}`);
        };
    },

    addOneComponent: async (req,res) =>{
        console.log(`----- Controller request addOneComponent for ${req.params.entity} -----`)

        // const id = req.params.id;
        const entity = req.params.entity;
        console.log('entity : ',entity);

        let entityToUse;
        for (let i = 0; i < objectModel.length; i++) {
            if (entity === objectModel[i].tableName) {
                entityToUse = objectModel[i];
            }
        };

        const newInstance = new entityToUse(req.body);
        const addedInstance = await newInstance.saveOrEditOneComponent();

        res.json(addedInstance);
    },
}

module.exports = mainController;