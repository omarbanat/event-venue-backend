require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
require('./config/database/connection');
const userRoutes = require('./routes/userRoutes');
const venueRoutes = require('./routes/venueRoutes');

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hello from the server');
});

app.use('/user', userRoutes);
app.use('/venue', venueRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
