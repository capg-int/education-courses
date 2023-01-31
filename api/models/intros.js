const {
    Schema,
    model
} = require('mongoose');

const ctaSchema = require('../db/reusableSchemas/ctaSchema');

const introSchema = new Schema({
    referer: {
        type: String,
        required: '{PATH} is required!'
    },
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    img: String,
    ctas: [ctaSchema]
}, {
    versionKey: false
});

module.exports = model("intros", introSchema);
