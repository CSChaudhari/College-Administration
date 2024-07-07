const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Multer Configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Schema for Concession
const concessionSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  uid: { type: String, required: true },
  branch: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  travelRoute: {
    from: { type: String, required: true },
    to: { type: String, required: true }
  },
  image: { type: String } // Storing image URL
});

// Schema for Bonafite
const bonafiteSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  uid: { type: String, required: true },
  branch: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  reason: { type: String, required: true },
  motherName: { type: String, required: true }
});

// Models
const Concession = mongoose.model('Concession', concessionSchema);
const Bonafite = mongoose.model('Bonafite', bonafiteSchema);

// Routes for Concession

// Submit Concession Application
app.post('/api/concession', upload.single('image'), async (req, res) => {
  try {
    const { fullName, uid, branch, yearOfStudy, mobileNumber, travelFrom, travelTo } = req.body;
    const image = req.file ? req.file.path : null; // Save the file path if uploaded

    const concession = new Concession({ fullName, uid, branch, yearOfStudy, mobileNumber, travelRoute: { from: travelFrom, to: travelTo }, image });
    await concession.save();
    res.status(201).send('Concession application submitted successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all Concession Applications
app.get('/api/concession', async (req, res) => {
  try {
    const concessions = await Concession.find();
    res.json(concessions);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a Concession Application by ID
app.delete('/api/concession/:id', async (req, res) => {
  try {
    await Concession.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Routes for Bonafite

// Submit Bonafite Application
app.post('/api/bonafite', async (req, res) => {
  try {
    const { fullName, uid, branch, yearOfStudy, reason, motherName } = req.body;
    const bonafite = new Bonafite({ fullName, uid, branch, yearOfStudy, reason, motherName });
    await bonafite.save();
    res.status(201).send('Bonafite application submitted successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all Bonafite Applications
app.get('/api/bonafite', async (req, res) => {
  try {
    const bonafites = await Bonafite.find();
    res.json(bonafites);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a Bonafite Application by ID
app.delete('/api/bonafite/:id', async (req, res) => {
  try {
    await Bonafite.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
