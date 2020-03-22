const mongoose = require('mongoose');
require('mongoose-type-email');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, " Name should be At least 3 character "]},
    email: {type: mongoose.SchemaTypes.Email, required: true},
    dob: { type: Date, default: new Date() },
    password:{type:String, required:true, minlength: [3, "Review should be At least 3 character "]},
    conf_password:{type:String, required:true, minlength: [3, "Review should be At least 3 character "]},
    stack: {type:Number, default:10.000}

},{timestamps: true})

const model = {
    User : mongoose.model('User', UserSchema)
}
module.exports = model;