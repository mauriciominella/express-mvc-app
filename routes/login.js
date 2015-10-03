var express = require('express');

var router = express.Router();
	
var context = {
	user: {
		username: 'mminella'
	},
	layout : 'public'
};		

// define routes
router.get('/login', function(req, res){
	
	res.render('login', context);
});

router.post('/login', function(req, res){
	
   var email = req.body.email;
   var password = req.body.password;
   
   console.log('email ' + email);
   console.log('password ' + password);
});

// router.post('', function(req, res){
// 	var newItem = req.body.newItem;
// 	
// 	todoItems.push({
// 		id: todoItems.length + 1,
// 		desc: newItem
// 	});
// 	
// 	res.redirect('/');	
// });

module.exports = router;