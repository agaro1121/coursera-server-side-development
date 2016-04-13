/**
 * Created by anthonygaro on 3/28/16.
 */
var mongoose = require('mongoose'),
    assert = require('assert');

var Leaderships = require('./models/leadership');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new leadership
    Leaderships.create({
        name: "Peter Pan",
        image: "images/alberto.png",
        designation: "Chief Epicurious Officer",
        abbr: "CEO",
        description: "Our CEO, Peter, . . ."
    }, function (err, leadership) {
        if (err) throw err;
        console.log('Leadership created!');
        console.log(leadership);

        var id = leadership._id;

        // get all the leaderships
        setTimeout(function () {
            Leaderships.findByIdAndUpdate(id, {
                $set: {
                    description: 'Updated Description'
                }
            }, {
                new: true
            })
                .exec(function(err,leadership){
                   if(err) throw err;
                    console.log("leadership description updated !");

                    leadership.save(function (err, leadership) {
                        console.log("Saving leadership...");
                        console.log(leadership); //notice comments have their own ObjectId and createdAt and updatedAt TS fields

                        db.collection('leaderships').drop(function () {
                            db.close();
                        });
                    });
                });

        });
    });
});