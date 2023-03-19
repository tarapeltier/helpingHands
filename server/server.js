const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require("body-parser");
const app = express();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'../client/src/assets');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: fileStorageEngine});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config');
require('./routes/need.routes')(app);
require('./routes/story.routes')(app);
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//handle file upload
app.post('/api/single', upload.single('image'), (req, res) => {
    res.send('File upload succesful');
})

//handle dotenv key request
app.get('/api/admin', (req, res) => {
    res.send(process.env.ADMIN_SECRET);
})

//handle payment through stripe
app.post("/api/payment", cors(), async (req, res) => {
	let { amount, id, description, receipt_email, name } = req.body;
	
	let customerID;

	//search for customer by email
	try {
		const existingCustomer = await stripe.customers.search({
			query: `email:"${receipt_email}"`,
		});
		if (existingCustomer.data.length > 0 && "id" in existingCustomer.data[0]){
			customerID = existingCustomer.data[0].id;
		}
		else{
			//create customer
			const customerCreate = await stripe.customers.create({
				name: name,
				email: receipt_email
			});
			customerID = customerCreate.id;
		}
	} catch (error) {
		console.log("customer check error",error)
	}
	
	//pay with customer id
	try {
		const customer = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description,
			payment_method: id,
			confirm: true,
			receipt_email,
			customer: customerID
		})
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(8000, () => {
    console.log("Listening at Port 8000");
})

