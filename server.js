//server.js

"use strict";
const op = require("./operaciones.js");
const op2 = require("./operaciones2.js");
var port = 8080;
var http = require("http");

console.log("RESULTADO ",op.suma(4,11));
console.log("El nombre es: ",op2.getNombre());

var server = http.createServer(function(req, res) {
    res.writeHead(200,{contentType:"text/plain"});
    res.end("hola mundo");

});

//para colocar el servidor, se envia el puerto
server.listen(port)