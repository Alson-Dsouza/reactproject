// server.js (or index.js)

const express = require('express');
const app = express();
const PORT = 3001; // You can change the port as needed
const hostname='127.0.0.1';
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose Schema for the items
const itemSchema = new mongoose.Schema({
  price: Number,
  itemname: String,
  itemdetailas:String
});

// Create a Mongoose Model
const Item = mongoose.model('Item', itemSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to fetch items from the database
app.get('/items', async (req, res) => {
  try {
    console.log('recieved get request');
    // Query the database for items
    const items = await Item.find();
    // console.Console.log(items[0]);
    // Send the retrieved items as JSON response
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
console.info('Server running at http://'+hostname+':'+PORT+'/');
});
