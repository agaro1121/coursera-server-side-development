/**
 * Created by anthonygaro on 3/28/16.
 */
var mongoose = require('mongoose'),
    assert = require('assert');

var Promotions = require('./models/promotion');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new promotion
    Promotions.create({
        name: "Weekend Grand Buffet",
        image: "images/buffet.png",
        label: "New",
        price: "19.99",
        description: "Featuring . . ."
    }, function (err, promotion) {
        if (err) throw err;
        console.log('Promotion created!');
        console.log(promotion);

        var id = promotion._id;

        // get all the promotions
        setTimeout(function () {
            Promotions.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Description'
                    }
                }, {
                    new: true
                })
                .exec(function (err, promotion) {
                    if (err) throw err;
                    console.log('Updated Promotion Description!');

                    promotion.save(function (err, promotion) {
                        console.log(promotion); //notice comments have their own ObjectId and createdAt and updatedAt TS fields

                        db.collection('promotions').drop(function () {
                            db.close();
                        });
                    });
                });

        }, 3000);
    });
});