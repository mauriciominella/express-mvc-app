module.exports = {

  'facebookAuth' : {
    'clientID'      : 'xxxxxxxxxxxx', // your App ID
    'clientSecret'  : 'xxxxxxxxxxxx', // your App Secret
    'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
  },

  'twitterAuth' : {
      'consumerKey'       : 'your-consumer-key-here',
      'consumerSecret'    : 'your-client-secret-here',
      'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
  },

  'googleAuth' : {
      'clientID'      : 'xxxxxxxxxxxx',
      'clientSecret'  : 'xxxxxxxxxxxx',
      'callbackURL'   : 'http://localhost:8080/auth/google/callback'
  }

}
