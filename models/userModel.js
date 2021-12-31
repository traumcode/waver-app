const mongoose = require('mongoose');

const userType = "ARTIST"

const artistNameRequired = userType === "ARTIST"

const userSchema = new mongoose.Schema({
	username: {
		type: 'String',
		require: [ true, "Please choose a username!" ],
		trim: true,
		unique: true
	},
	artistName: {
		type: 'String',
		require: function () {return this.role.type === "ARTIST"}
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
		default: 'https://i.ibb.co/zXZFTY2/09.png'
	},
	bio: {
		type: 'String',
		default: ''
	},
	location: {
		type: 'String',
		default: ''
	},
	dateJoined: {
		type: 'Date',
		default: Date.now()
	}
}, {
	timestamp: true
})

module.exports = mongoose.model("Users", userSchema)