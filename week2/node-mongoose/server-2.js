/**
 * Created by anthonygaro on 3/28/16.
 */

var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes-1');
// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
    // create a new dish
    Dishes.create({
        name: 'Batman',
        description: 'Dark Knight'
    }, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);

        var id = dish._id;

        // get all the dishes
        setTimeout(function () { //code inside gets executed after set time
            Dishes.findByIdAndUpdate(id, {
                    $set: {
                        description: 'The Dark Knight'
                    }
                }, {
                    new: true //return new record inserted, not what is currently there
                })
                .exec(function (err, dish) { //chaining this in. Takes callback. Gets latest dish
                    if (err) throw err;
                    console.log('Updated Dish!');
                    console.log(dish); //once printed, you can observe the updated file updatedAt TS

                    db.collection('dishes').drop(function () {
                        db.close();
                    });
                });
        }, 3000); //timeout time
    });
});