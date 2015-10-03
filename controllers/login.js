var express = require('express')
  , router = express.Router()
  , auth = require('../middlewares/auth')
  /*, Comment = require('../models/comment')*/

var context = {
	user: {
		username: 'mminella'
	},
	layout : 'public'
}

router.get('/', function(req, res) {
 /* Comment.get(req.params.id, function (err, comment) {
    res.render('comments/comment', {comment: comment})
  })*/
  res.render('login', context);
})

router.post('/', function(req, res){
	
   var email = req.body.email;
   var password = req.body.password;
   
   console.log('email ' + email);
   console.log('password ' + password);
});

module.exports = router