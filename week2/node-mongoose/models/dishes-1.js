// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true //only 1 dish with this name in the collection
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true //creates 2 TS fields for you. "createdAt & updatedAt". This gets updated automatically
});

// the schema is useless so far
// we need to create a model using it
var Dishes = mongoose.model('Dish', dishSchema); //creates collection with plural of name passed in i.e 'Dish' -> Dishes

// make this available to our Node applications
module.exports = Dishes;