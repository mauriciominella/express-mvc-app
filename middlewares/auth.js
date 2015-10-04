module.exports = function(req, res, next) {
  if(req.path == '/login') return next();  
    if (req.user) {
      console.log('authenticated!!!')
      next()
  } else {
    console.log('redirecting back to login');
    res.redirect('/login');
  }
}