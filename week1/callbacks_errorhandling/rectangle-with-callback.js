/**
 * Created by Hierro on 3/15/16.
 */

module.exports = function(x,y,callback){
    try{
        if(x < 0 || y < 0){
            throw new Error("Rectangle sides should be greater than zero !");
        }
        else
            callback(null, { //first param is error. Second param is function. //This is the callback passed in
               perimeter: function(){ return (2*(x+y)) },
                area: function() { return (x*y); }
            });
    }
    catch(error) {
        callback(error,null);
    }
}
