/**
 * Created by Hierro on 3/15/16.
 */

var argv = require('yargs')
    .usage('Usage: node $0 --l=[num] --w=[num]')
    .demand(['l','w'])
    .argv;

var rect = require('./rectangle-with-callback')

function solveRect(l,w) {
    console.log("Solving for rectangle with l = " + l + " and w = " + w)


    rect(l, w, function (err, rectangle) {
        if (err) {
            console.log(err);
        } else {
            console.log("Area of the rectangle: " + rectangle.area()); //params automatically passed in
            console.log("Perimeter of the rectangle: " + rectangle.perimeter());  //params automatically passed in
        }
    });
}

solveRect(argv.l, argv.w)