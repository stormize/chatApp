var express = require('express');
var socket = require('socket.io');
//App setup
var app = express();
var server = app.listen(4000,function(){
});
//static files
app.use(express.static('public'));
//set socket
var io = socket(server);

io.on('connection',function(socket){
  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  });
  socket.on('feedback',function (data) {
     socket.broadcast.emit('feedback',data);
  });
});
