const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    userName: {type: String},
    email : {type:String , required: true},
    password : { type:String , required: true},
    isVerified : {type:Boolean , default:false}
});
module.exports = mongoose.model("user",userSchema);