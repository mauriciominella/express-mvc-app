var express = require('express')
  , router = express.Router()
  //, Comment = require('../models/comment')

//router.use('/comments', require('./comments'))
router.use('/login', require('./login'))
	
router.get('/', function(req, res) {
 /* Comments.all(function(err, comments) {
    res.render('index', {comments: comments})
  })*/
		
  var context = {
    user: {
      username: 'mminella'
    }	
  };
  
  res.render('index', context);
})

module.exports = router