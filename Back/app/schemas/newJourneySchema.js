//const Joi = require('joi');
const JoiTimezone = require('joi-tz');
const JoiFormat = require ('@joi/date');
const Joi = require('joi').extend(JoiFormat);


const newJourneySchema = Joi.object({
    meeting_address: Joi.string().required(),
    departure_date: Joi.date().iso().required(),
    departure_time: Joi.date().format('HH:mm:ss'),
    price: Joi.number().greater(0).required(),
    place_available: Joi.number().greater(0).required(),
    number_of_boards_allowed: Joi.number().greater(0),
    board_size_allowed: Joi.number().greater(0),
    number_of_boards_loaded: Joi.number().greater(0).allow(null),
    driver_id: Joi.number().greater(0).required(),
    departure_city_id: Joi.number().greater(0).required(),
    destination_surfspot_or_city_id: Joi.number().greater(0).required()
});

module.exports = newJourneySchema;