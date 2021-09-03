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
/*         category: {
            type: [{
                type: String,
                enum: travelEvents,
            }],
        }, */
        startDate: {
            type:String,
        },
        endDate: {
            type:String
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

const TravelEvent = mongoose.model('TravelEvent', travelEventschema);
module.exports = TravelEvent