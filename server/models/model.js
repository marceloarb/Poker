const mongoose = require('mongoose');
require('mongoose-type-email');
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: [3, " Name should be At least 3 character "]},
    email: {type: mongoose.SchemaTypes.Email, required: true},
    password:{type:String, required:true, minlength: [8, "Password should be At least 8 character "]},
    conf_password:{type:String, required:true, minlength: [8, "Password must be equal"]},
    dob: { type: Date, required:true, default: new Date() },
    stack: {type:Number, default:10.000},
    

},{timestamps: true})

const TableSchema = new mongoose.Schema({
    deck:{},
    players:[],
    users:[UserSchema],
})

const model = {
    User : mongoose.model('User', UserSchema)
}
module.exports = model;