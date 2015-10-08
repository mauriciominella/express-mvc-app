var express = require('express')
  , router = express.Router()

router.use('/login', require('./login'))
	
router.get('/', function(req, res) {

  var context = {
    user: {
      username: 'mminella'
    }	
  };
  
  res.render('index', context);
})

module.exports = router