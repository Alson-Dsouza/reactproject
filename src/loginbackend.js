// server.js

const express = require('express');
const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3005;
// You can change the port as needed
const hostname='127.0.0.1';

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const User = mongoose.model('User', { emailid: String, password: String }, 'users');

app.use(express.json());
app.use(cors());

// Login endpoint
app.post('/login', async (req, res) => {
  const { emailid, password } = req.body;
  const user = await User.findOne({ emailid });
  // console.log(user);

//   
if (!user ||password !== user.password)
 {
    // console.log(user.email)
    console.log(user.password)
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ email: user.emailid }, 'secret', { expiresIn: '1h' });
  res.json({ token });
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}


// Start the server
app.listen(PORT, () => {
    console.info('Server running at http://'+hostname+':'+PORT+'/');
});
