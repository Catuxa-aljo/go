const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = new Schema ({
    title: {
        type: String
    },
    travel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel',
        required: true,
    },

    longitude: {
       
    },
    latitude: {

    },

    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc.id;
            delete ret._id;
            delete ret._v;
            delete ret.password;

            return ret
            }
        },

})

const Location = mongoose.model('Location', schema);
module.exports = Location


