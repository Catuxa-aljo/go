const TravelEvent = require('../models/travelEvent.model');
const createError = require('http-errors');
const Travel = require('../models/travel.model');

module.exports.create = (req, res, next) => {
    const travel = {name, description, event, startDate, endDate, price, location} = req.body;
    TravelEvent.create ({...travel, travel: req.params.id})
        .then(travel => {
            res.json(travel)
        })
        .catch(next)
}