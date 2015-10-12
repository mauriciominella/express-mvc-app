// app/profile.js
module.exports = function(app, passport) {

  var isLoggedIn = require('../middlewares/isLoggedIn');

  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/profile', isLoggedIn, function(req, res) {

      var context = {
          user : req.user
      }

      res.render('profile',
          context // get the user out of session and pass to template
      );
  });
}
