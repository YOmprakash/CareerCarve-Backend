const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  img: { type: String, required: true },
  name: { type: String, required: true },
  sessionsTaken: { type: Number, required: true },
  university: { type: String, required: true },
  currentJob: { type: String, required: true },
  areas: { type: [String], required: true },
  ratings: { type: Number, required: true },

});

const Mentor = mongoose.model('Mentor', MentorSchema);

module.exports = { Mentor };
