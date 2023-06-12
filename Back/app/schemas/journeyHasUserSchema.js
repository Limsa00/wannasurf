const Joi = require('joi');

const journeyHasUserSchema = Joi.object({
    journey_id: Joi.number().greater(0).required(),
    user_id: Joi.number().greater(0).required()
});

module.exports = journeyHasUserSchema;