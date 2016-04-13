/**
 * Created by anthonygaro on 4/13/16.
 */
var mongoose = require('mongoose');
var mongooseCurrency = require('mongoose-currency');
var currencyTypes = mongooseCurrency.loadType(mongoose);
var Currency = mongoose.Types.Currency;
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// create a schema
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    category: {
      type: String
    },
    label: {
      type: String, default: ""
    },
    price: {
      type: Currency
    },
    description: {
        type: String,
        required: true
    },
    comments:[commentSchema] //array of commentSchema
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Dishes = mongoose.model('Dish', dishSchema);

// make this available to our Node applications
module.exports = Dishes;