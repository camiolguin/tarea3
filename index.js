var app = require('express')();
var http = require('http').Server(app);
const io = require('socket.io')({
  path: '/flights'
});
//var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index2.html');
});

io.on('connection', function(socket){
   console.log('loggg');
 });

http.listen(port, function(){
  console.log('listening on *:' + port);
});
