require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = "mongodb+srv://edbarbera:wordpassword@cluster0.2rzkies.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.log('There was an error connecting to Mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
