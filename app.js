var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
var exphbs  = require('express-handlebars');

// configure app
var hbs = require('./views/setup/handlebarsSetup.js')(exphbs);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

var configDB = require('./config/database.js');




require('./config/passport')(passport);

// configuration
mongoose.connect(configDB.url);

// use middleware
//app.use(express.static(path.join(__dirname, 'bower_components/AdminLTE')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev')); //log every request to the console
app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret: 'ssshhhhh'})); // session secret
app.use(passport.initialize());
app.use(passport.session());  // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session 

//app.use(require('./middlewares/users'))
//app.use(require('./middlewares/auth'))
//app.use(require('./controllers'))

// routes ======================================================================
require('./controllers/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// start the server
var port = process.env.PORT || 8080;

app.listen(port, function(){
	console.log('ready on port ' + port);
});