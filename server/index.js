/* MAIN SERVER FILE */

//  DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

// Connect the database
mongoose.connect(keys.mongoURI);

// APP
const app = express();

// Connect the app to the authRutes
require('./routes/authRoutes')(app);

// SERVER INIT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
