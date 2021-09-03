const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Review = new Schema ({
    img: {
        type: String
    },
    comments: {
        type: String
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TravelEvent',
    },
    travel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel',
    }

})

const Review = mongoose.model('Review', schema);
module.exports = Review