const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const app = express();
const PORT = 3000;
dotenv.config();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define User Schema
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phoneNumber: String
});
const UserIn = mongoose.model('UserIn', userSchema);

// Add User Route
app.post('/api/users', async (req, res) => {
  try {
    const { firstname, lastname, phoneNumber, email } = req.body;
    const newUser = new UserIn({ firstname, lastname, phoneNumber, email });
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
});

// Create Review model
const Review = mongoose.model('Review', reviewSchema);

// Add Review Route
app.post('/api/reviews', async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;
    const newReview = new Review({ name, email, message, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Reviews Route
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});