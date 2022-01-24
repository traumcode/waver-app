const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')

const { CLIENT_URL } = process.env

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
			return res.status(500).json({ message: error.message });
		}
	},
	activateEmail: async (req, res) => {
		try {
			const {activation_token} = req.body
			const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)

			const {username, email, password} = user

			const check = await Users.findOne({email})
			if(check) return res.status(400).json({message:"This email already exists."})

			const newUser = new Users({
				username, email, password
			})

			await newUser.save()

			res.json({message: "Account created successfully"})

		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	login: async (req, res) => {
		try {
			const {email, password} = req.body;
			const user = await Users.findOne({email})
			if(!user) return res.status(400).json({ message: "This email does not exist." });

			const isMatch = await bcrypt.compare(password, user.password)
			if(!isMatch) return res.status(400).json({ message: "Password is incorrect." });

			const refresh_token = createRefreshToken({id: user._id})
			res.cookie('refreshtoken', refresh_token, {
				httpOnly: true,
				path: '/user/refresh_token',
				maxAge: 7*24*60*60*1000
			})
			res.json({message: "Login success!"})
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	getAccessToken: (req, res) => {
		try {
			const rf_token = req.cookies.refreshtoken
			if(!rf_token) return res.status(400).json({message: "Please login first!"})

			jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
				if(error) return res.status(400).json({message: "Please login !"})
				const access_token = createAccessToken({id: user.id})
				res.json({access_token})
			})
		} catch (error) {
			return res.status(500).json({message: error.message})
		}
	}
}

function validateEmail (email) {
	const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	return re.test(email)
}

const createActivationToken = (payload) => {
	return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '5m' })
}

const createAccessToken = (payload) => {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}

const createRefreshToken = (payload) => {
	return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

module.exports = userController