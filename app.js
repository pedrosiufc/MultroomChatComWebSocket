/*importar as configurções do servidor*/
var app = require('./config/server');
//parametrizando a porta de escuta do servidor
app.listen(80, function(){
  console.log('Servidor online');
})