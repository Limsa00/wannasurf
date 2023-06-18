const Journey = require('../models/Journey');
const User = require('../models/User');
const City = require('../models/City');
const Surfspot = require('../models/Surfspot');
const Journey_has_user = require('../models/Journey_has_user');


const objectModel = [Journey, User, City, Journey_has_user, Surfspot];

const getEntityToUse = (req,res,next)=>{
    const entity = req.params.entity;
    let entityToUse;
    for (let i = 0; i < objectModel.length; i++) {
        if (entity === objectModel[i].tableName) {
            entityToUse = objectModel[i];
        }
    };
    if(!!entityToUse){
        req.entityToUseFromMW = entityToUse;
        next()
    }else{
        console.log('wrong entity called');
        res.status(500).json('Vous n\'avez pas le droit d\'aller sur ce endpoint');
    }
}

module.exports = getEntityToUse;