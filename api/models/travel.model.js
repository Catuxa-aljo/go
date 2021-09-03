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
            type: []
        },
        startingDate: {
            type: String
        },
        cover: {
            type: String
        },
        endDate: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
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

const Travel = mongoose.model('Travel', travelSchema);
module.exports = Travel