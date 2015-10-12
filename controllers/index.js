// app/routes.js
module.exports = function(app, passport) {

  var isLoggedIn = require('../middlewares/isLoggedIn');

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', isLoggedIn, function(req, res) {
      res.render('index'); // load the index.ejs file
  });

}
