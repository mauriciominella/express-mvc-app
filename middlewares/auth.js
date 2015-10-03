module.exports = function(req, res, next) {
  if(req.path == '/login') return next();  
  
  if (req.user) {
    next()
  } else {
    res.status(401).end()
  }
}