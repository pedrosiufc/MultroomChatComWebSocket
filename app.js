/*importar as configurções do servidor*/
var app = require('./config/server');
//parametrizando a porta de escuta do servidor
var server = app.listen(80, function () {
  console.log('Servidor online');
})

var io = require('socket.io').listen(server); //atribuindo a uma variável

//variável dentro do obj do express (global)
app.set('io', io);
//criar a conexão por WebSocket

io.on('connection', function (socket) {
  console.log('Usuário conectou!');

  socket.on('disconnect', function () {
    console.log('Usuário desconectado!');
  });

  socket.on('msgParaServidor', function(data){
    socket.emit('msgParaCliente',{apelido: data.apelido, mensagem: data.mensagem}     
    );
    socket.broadcast.emit('msgParaCliente',{apelido: data.apelido, mensagem: data.mensagem});
  });

});
