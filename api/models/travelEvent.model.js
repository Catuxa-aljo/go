const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const travelEvents = require('../data/travelEvents.json')

const travelEventschema = new Schema({
        name: {
            type:String,
            required:'A name is required'
        },
        description: {
            type: String
        },
         category: {
            type: [{
                type: String,
                enum: Object.keys(travelEvents)
            }],
        },
        startDate: {
            type:String,
            required: 'A starting date is required'
        },
        endDate: {
            type:String,
            required: 'An ending date is required'
        },
        time: {
            type:String,
        },

        price: {
            type:Number
        },
        status: {
            type: Boolean,
            default: false
        },
        travel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Travel',
            required: true,
        },
        location: {
            type: {
                type: String,
                default: 'Point'
            },
            coordinates: [Number]
        },

    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = doc.id;
                delete ret._id;
                delete ret.__v;
                delete ret.password;

                return ret
                }
            },
    }
)

travelEventschema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'event',
    justOne: false
})

const TravelEvent = mongoose.model('TravelEvent', travelEventschema);
module.exports = TravelEvent