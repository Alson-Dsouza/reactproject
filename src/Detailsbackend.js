// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define a Mongoose schema for the item collection
const itemSchema = new mongoose.Schema({
  itemname: String,
  price: Number,
  itemdetails: String,
  imgurl: String
});

// Create a Mongoose model for the item collection
const Item = mongoose.model('items', itemSchema);


// Middleware to parse JSON requests
app.use(bodyParser.json());

// API endpoint to fetch item details by productId
app.get('/items/:_id', async (req, res) => {
  try {
    const _id = req.params._id;
    // console.log(_id);
    // Find the item in the database by productId
    const item = await Item.findById(_id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    // If item found, send it in the response
    res.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
