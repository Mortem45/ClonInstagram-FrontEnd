const LocalStrategy = require('passport-local').Strategy;
const cloninstagramClient = require('cloninstagram-client');
const config = require('../config');


let client = cloninstagramClient.createClient(config.client);

exports.localStrategy = new LocalStrategy((username, password, done) => {

})


exports.serializeUser = function (user, done) {

}

exports.deserializeUser = function (user, done) {
  
}