require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
require('./config/database/connection');

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
