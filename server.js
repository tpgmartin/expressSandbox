var express = require('express');
var app     = express();

require('./router/main')(app);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

var server  = app.listen(3000, function () {
  
  var host = server.address().address;
  var port = server.address().port;

  console.log('Express is running at http://%s:%s', host, port);
});