/**
 * Created by hierro on 3/27/16.
 */

var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes-1');

//Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open',function(){
    //we're connected !
    console.log("Connected correctly to server");

    var newDish = Dishes({
        name: "Batman",
        description: "The Dark Knight"
    });

    newDish.save(function(err){
        if(err) throw err;

        console.log("Dish Saved !");
    });
});