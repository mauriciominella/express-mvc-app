module.exports = function(exphbs){

	return exphbs.create({
		defaultLayout: 'main',
		// Specify helpers which are only registered on this instance. 
		helpers: {
			displayErrorMessage: function (message) { 
				return message.length > 0; 
				},
		}
	});
	
};

