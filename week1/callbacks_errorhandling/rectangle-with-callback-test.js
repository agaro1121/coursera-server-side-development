/**
 * Created by Hierro on 3/15/16.
 */

var rect = require('./rectangle-with-callback')

rect(2,4,function(err,rectangle){
   if(err){
       console.log(err);
   } else {
       console.log("Area of the rectangle: " + rectangle.area() ); //params automatically passed in
       console.log("Perimeter of the rectangle: " + rectangle.perimeter() );  //params automatically passed in
   }
});
rect(-2,4,function(err,rectangle){
   if(err){
       console.log(err);
   } else {
       console.log("Area of the rectangle: " + rectangle.area() ); //params automatically passed in
       console.log("Perimeter of the rectangle: " + rectangle.perimeter() );  //params automatically passed in
   }
});
