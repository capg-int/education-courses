const {
    Schema,
    model
} = require('mongoose');

const etcSchema = new Schema({
    referer: String,
    data: Schema.Types.Mixed
});

module.exports = model('etc', etcSchema);
