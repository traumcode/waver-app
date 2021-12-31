const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')

const {CLIENT_URL} = process.env

const userController = {
	register: async (req, res) => {
		try {
			const {
				      username,
				      artistName,
				      email,
				      password
			      } = req.body

			if (!username || !email || !password) {
				return res.status(400).json({ message: "Please fill in all fields" })
			}
			if (!validateEmail(email)) {
				return res.status(400).json({ message: "Invalid email" })
			}

			const userName = await Users.findOne({ username })
			const userEmail = await Users.findOne({ email })

			if (userEmail) {
				return res.status(400).json({ message: "Email already exists" })
			}
			if (userName) {
				return res.status(400).json({ message: "Username already exists" })
			}
			if (password.length < 6) {
				return res.status(400).json({ message: "Password must be at least 6 characters long" })
			}

			const passwordHash = await bcrypt.hash(password, 12)
			const newUser = {
				username,
				artistName,
				email,
				password: passwordHash
			}
			const activation_token = createActivationToken(newUser)
			const url = `${CLIENT_URL}/user/activate/${activation_token}`
			sendMail(email, url)

			res.json({ message: "Register success ! Please verify your email and activate your account" })
		} catch (error) {
			return res.status(500)
				.json({ message: error.message });
		}
	}
}

function validateEmail (email) {
	const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	return re.test(email)
}

const createActivationToken = (payload) => {
	return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

const createRefreshToken = (payload) => {
	return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userController