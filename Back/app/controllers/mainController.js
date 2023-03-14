const Journey = require('../models/Journey');
const User = require('../models/User');
const City = require('../models/City');
const Journey_has_user = require('../models/Journey_has_user');


const objectModel = [Journey, User, City, Journey_has_user, Surfspot];

const mainController = {
    getEntityToUse:(req,res)=>{
        const entity = req.params.entity;

        let entityToUse;
        for (let i = 0; i < objectModel.length; i++) {
            if (entity === objectModel[i].tableName) {
                entityToUse = objectModel[i];
            }
        };
        return entityToUse;
    },

    showAllComponents: async (req,res) =>{
        console.log(`----- Controller request showAllComponents for ${req.params.entity} -----`)

        const entityToUse = mainController.getEntityToUse(req,res);

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
        const entityToUse = mainController.getEntityToUse(req,res);

        const component = await entityToUse.findOneComponent(id);

        if (component) {
            res.json(component);
        } else {
            res.status(404).json(`Il n\'existe pas de composant pour ${entity}:${id}`);
        };
    },

    addOneComponent: async (req,res) =>{
        console.log(`----- Controller request addOneComponent for ${req.params.entity} -----`);

        const entityToUse = mainController.getEntityToUse(req,res);

        const newInstance = new entityToUse(req.body);
        const addedInstance = await newInstance.saveOrEditOneComponent();

        res.json(addedInstance);
    },

    editOneComponent: async (req,res) => {
        console.log(`----- Controller request UpdateOneComponent for ${req.params.entity} -----`);

        const entityToUse = mainController.getEntityToUse(req,res);
        const instance = await entityToUse.findOneComponent(req.params.id);
        
        if(instance){
            instanceToEdit = await new entityToUse(instance);
            instanceToEdit.update(req.body);
            instanceToEdit.saveOrEditOneComponent();
            res.status(200).json('Utilisateur mis à jour');
        } else {
            res.status(202).json(`Impossible d'effectuer cette opération`);
        }
    },

    deleteOneComponent: async (req,res) =>{
        console.log(`----- Controller request deleteOneComponent for ${req.params.entity} -----`)

        const entityToUse = mainController.getEntityToUse(req,res);

        const record = await entityToUse.findOneComponent(req.params.id);

        if (record) {
            const recordToDelete = new entityToUse(record);
            await recordToDelete.deleteComponent();
            res.json("suppression effectuée");
        } else{
            res.status(404).json('Il n\'est pas possible de faire cette suppression');
        }
    }
}