/*var db = require('../db')
  , crypto = require('crypto')*/
  
var crypto = require('crypto');

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

exports.get = function(id, callback) {
  
    var user = {
    name: 'mminella',
    email: 'mauriciominella@gmail.com',
    password: hash('3006'),
  }

  /*db.fetch({id:id}, function(err, docs) {
    if (err) return cb(err)
    cb(null, docs[0])
  })*/
  callback(null, user);
}

exports.authenticate = function(email, password, callback) {
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
  
  callback();
  
}

exports.changePassword = function(id, password, callback) {
  /*db.update({id:id}, {password: hash(password)}, function(err, affected) {
    if (err) return cb(err)
    cb(null, affected > 0)
  })*/
}