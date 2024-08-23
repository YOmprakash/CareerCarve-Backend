const express = require('express');
const app = express();
const cors = require('cors'); 
const port = 5000;
app.use(cors()); 
app.use(express.json());

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Mentor } = require('./models/Models');

const bookings = [];

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log(err));


// Endpoint to fetch mentor data from MongoDB
app.get('/api/mentors', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching mentors' });
  }
});

app.post('/api/bookings', (req, res) => {
  const { studentName, mentorId,mentorName, duration, amount } = req.body;
  const booking = {  mentorId, mentorName,studentName, duration, amount, timestamp: new Date() };
  bookings.push(booking);
  console.log(booking)
  res.status(201).json(booking);
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
