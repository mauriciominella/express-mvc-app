var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
var exphbs  = require('express-handlebars');

// configure app
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// use middleware
app.use(express.static(path.join(__dirname, 'bower_components/AdminLTE')));

app.use(bodyParser());
app.use(session({secret: 'ssshhhhh'}));

app.use(require('./middlewares/users'))
app.use(require('./middlewares/auth'))
app.use(require('./controllers'))

// start the server
var port = process.env.PORT || 1337;

app.listen(port, function(){
	console.log('ready on port ' + port);
});