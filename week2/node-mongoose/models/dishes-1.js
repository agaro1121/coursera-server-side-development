/**
 * Created by hierro on 3/27/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Dishes = mongoose.model('Dish',dishSchema); //creates a collection of plural name specified. i.e 'Dish' = 'Dishes' Collection
module.exports = Dishes; //makes Dishes model available to other modules.

