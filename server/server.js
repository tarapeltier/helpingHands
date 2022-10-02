const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require("body-parser")
const app = express();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'../client/src/assets')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
});

const upload = multer({storage: fileStorageEngine});

app.use(cors());
app.use(express.json());                           /* allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* allows JSON Objects with strings and arrays*/
require('./config/mongoose.config');
require('./routes/need.routes')(app);
require('./routes/story.routes')(app);
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//handle file upload
app.post('/single', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('File upload succesful');
})

//handle payment through stripe
app.post("/payment", cors(), async (req, res) => {
	console.log("body",req.body)
	let { amount, id, description, receipt_email } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description,
			payment_method: id,
			confirm: true,
			receipt_email
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

