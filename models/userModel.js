const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: {
	  type: 'String',
	  require: [ true, "Please choose a username!" ],
	  trim: true,
	  unique: true
   },
   email: {
	  type: 'String',
	  require: [ true, "Please enter your email!" ],
	  trim: true,
	  unique: true
   },
   password: {
	  type: 'String',
	  require: [ true, "Please enter your password!" ],
   },
   role: {
	  type: 'String',
	  default: 'USER'
   },
   avatar: {
	  type: 'String',
	  default: ''
   },
   bio: {
	  type: 'String',
	  default: ''
   },
   location: {
	  type: 'String',
	  default: ''
   }

})

module.exports = mongoose.model("Users", userSchema)