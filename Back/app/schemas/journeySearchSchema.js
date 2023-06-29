const Joi = require('joi');

const journeySearchSchema = Joi.object({
    place: Joi.number().greater(0)/*.required()*/,
    date: Joi.date()/*.greater(new Date()).required()*/
});

module.exports = journeySearchSchema;