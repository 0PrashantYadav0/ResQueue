const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const path = require('path')

const Razorpay = require("razorpay");
const crypto = require("crypto");

const app = express();
const PORT = 3000;
dotenv.config();

__dirname = path.resolve();

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ResQueue", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define User Schema
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  hotelId: {
    type: String,
    required: true,
  },
});
const UserIn = mongoose.model('UserIn', userSchema);

// Add User Route
app.post('/api/users', async (req, res) => {
  try {
    const { firstname, lastname, phoneNumber, email, hotelId } = req.body;
    //check every field is filled
    if (!firstname || !lastname || !phoneNumber || !email || !hotelId) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newUser = new UserIn({ firstname, lastname, phoneNumber, email, hotelId });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await UserIn.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Delete User Route
app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserIn.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Define Review Schema
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  hotelId: {
    type: String,
    required: true,
  },
});

// Create Review model
const Review = mongoose.model('Review', reviewSchema);

// Add Review Route
app.post('/api/reviews', async (req, res) => {
  try {
    const { name, email, message, rating, hotelId } = req.body;
    const newReview = new Review({ name, email, message, rating, hotelId });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Reviews Route
app.get('/api/reviews/:hotelId', async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const reviews = await Review.find({ hotelId: hotelId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


app.post("/api/process/payment", async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id:"rzp_test_FFmybeRKLHkZGx",
			key_secret:"9DtnVyDFEaXcEfqbPP3TADBL",
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

app.post("/verify", async (req, res) => {
	try {
		const {  razorpay_payment_id,razorpay_order_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", "9DtnVyDFEaXcEfqbPP3TADBL")
			.update(sign.toString())
			.digest("hex");
		if (razorpay_signature === expectedSign) {
			return res.status(200).json({ message: "Payment verified successfully" });
		} else {
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
