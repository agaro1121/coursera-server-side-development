/**
 * Created by anthonygaro on 3/17/16.
 */

var http = require('http');
var server  = http.createServer(function(req,res){});
//server.listen(port,...);

var path = require('path');
path.resolve('./public'+fileUrl); //absolute path
path.extname(filepath); //ext of file

var fs = require('fs');//file system
fs.exists(filePath,function(exists){}); //check if a file exists
fs.createReadStream(filePath).pipe(res); //read from a file and pipe into response