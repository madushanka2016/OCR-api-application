const mongoose = require('mongoose');
const imageSchema = mongoose.Schema({
    image: Buffer,
    text:String
});
module.exports = mongoose.model('images',imageSchema);