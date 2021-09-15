const mongoose = require('mongoose');
const Schema = mongoose.Schema

const travelSchema = new Schema ({
        title: {
            type: String,
            required: 'A title for the travel is required'
        },
        description: {
            type: String
        },
        participants: {
            type: Number
        },
        startingDate: {
            type: String
        },
        cover: {
            type: String,
            default: 'https://img.vectorfair.com/STUDIO-CAM/STUDIO%20CAM%20371%20140319%20A/TM_STUDIO%20CAM%20371-74.jpg'
        },
        endDate: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        budget: {
            type: Number
        }
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

travelSchema.virtual('events', {
    ref: 'TravelEvent',
    localField: '_id',
    foreignField: 'travel',
    justOne: false
});

travelSchema.virtual('albums', {
    ref: 'Album',
    localField: '_id',
    foreignField: 'travel',
    justOne: false
})

const Travel = mongoose.model('Travel', travelSchema);
module.exports = Travel