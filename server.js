require('dotenv')
	.config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')


const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({ useTempFiles: true }))

/* ROUTES */
app.use('/user', require('./routes/userRouter'))

/* CONNECT TO MONGODB */
const URI = process.env.MONGODB_URL || "No URL specified"
mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, error => {
	if (error) {
		throw error;
	}
	console.log("\n" +
		"                                     \n" +
		"                         _         _ \n" +
		" ___ ___ ___ ___ ___ ___| |_ ___ _| |\n" +
		"|  _| . |   |   | -_|  _|  _| -_| . |\n" +
		"|___|___|_|_|_|_|___|___|_| |___|___|\n" +
		"                                     \n")
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log('Server is running Goooooooooooood', PORT)
})
