/**
 * Created by anthonygaro on 4/13/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var leadershipSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    designation: {
        type: String, default: ""
    },
    abbr: {
        type: String
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
var Leadership = mongoose.model('Leadership', leadershipSchema);

// make this available to our Node applications
module.exports = Leadership;