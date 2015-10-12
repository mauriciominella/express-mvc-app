// models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var crypto = require('crypto');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);


/*
var hash = function(password) {
  return crypto.createHash('sha1').update(password).digest('base64')
}

exports.create = function(name, email, password, callback) {
  var user = {
    name: name,
    email: email,
    password: hash(password),
  }

  //db.save(user, cb)
}
*/
/*exports.get = function(id, callback) {

    var user = {
    name: 'mminella',
    email: 'mauriciominella@gmail.com',
    password: hash('3006'),
  }
*/
  /*db.fetch({id:id}, function(err, docs) {
    if (err) return cb(err)
    cb(null, docs[0])
  })*/
/*  callback(null, user);
}*/

//exports.authenticate = function(email, password, callback) {
 /* db.fetch({email:email}, function(err, docs) {
    if (err) return cb(err)
    if (docs.length === 0) return cb()

    user = docs[0]

    if (user.password === hash(password)) {
      cb(null, docs[0])
    } else {
      cb()
    }
  })*/

  //callback();

//}

//exports.changePassword = function(id, password, callback) {
  /*db.update({id:id}, {password: hash(password)}, function(err, affected) {
    if (err) return cb(err)
    cb(null, affected > 0)
  })*/
//}
