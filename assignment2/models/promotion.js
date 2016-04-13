/**
 * Created by anthonygaro on 4/13/16.
 */

var mongoose = require('mongoose');
var mongooseCurrency = require('mongoose-currency');
var currencyTypes = mongooseCurrency.loadType(mongoose);
var Currency = mongoose.Types.Currency;
var Schema = mongoose.Schema;

// create a schema
var promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
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
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Promotions = mongoose.model('Promotion', promotionSchema);

// make this available to our Node applications
module.exports = Promotions;