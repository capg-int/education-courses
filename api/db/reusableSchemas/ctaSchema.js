const Schema = require('mongoose').Schema;

const ctaSchema = new Schema({
    label: {
        type: String,
        required: 'Button {PATH} is required!'
    },
    href: String,
    variant: String
});

module.exports = ctaSchema;
