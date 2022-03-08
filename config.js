const { ObjectId } = require('bson');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://localhost:dev102030@cluster0.mdupn.mongodb.net/test?retryWrites=true&w=majority");

const userSchema = new mongoose.Schema({
    _id: ObjectId,
    name: String,
    age: Number,
    active: Boolean
}, { collection: 'users' });

module.exports = {
    Mongoose: mongoose,
    userSchema
}