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

/*******************************************************************************************************************/
rect(-2,4,function(err,rectangle){
   if(err){
       console.log(err);
   } else {
       console.log("Area of the rectangle: " + rectangle.area() ); //params automatically passed in
       console.log("Perimeter of the rectangle: " + rectangle.perimeter() );  //params automatically passed in
   }
});

rect(2,3,function(err,rectangle){console.log(rectangle.perimeter())}); //success case
//rect(-2,3,function(err,rectangle){console.log(rectangle.perimeter())}); //throws exception bcuz rectangle comes back as null so -> null.perimeter() DNE
rect(-2,3,function(err,rectangle){console.log(err)}); //failure case
rect(2,3,function(err,rectangle){console.log(err)}); //prints null bcuz failure case not handled here