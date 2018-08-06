/** npm install --save ws */
var fs = require('fs');
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });
console.log('run index.html at', __dirname);

wss.on("connection", function(ws) {
  ws.on("message", function(message) {
     if (message === 'exit') { ws.close(); }
     else { wss.clients.forEach(function(client){
       client.send(message);
     }); }

  });
  ws.send("Welcom to cyber chat");

});
