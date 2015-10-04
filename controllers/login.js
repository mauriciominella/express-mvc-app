var express = require('express')
  , router = express.Router()
  , auth = require('../middlewares/auth')
  , user = require('../models/user');
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
   
   user.authenticate(email, password, function(){
     console.log('foiiii')
     console.log(user);
     req.session.user = user;
     res.end('yes');
   });
   
});

module.exports = router