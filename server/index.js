/* MAIN SERVER FILE */

//  DEPENDENCIES
const express = require('express');
require('./services/passport');

// APP
const app = express();

// Connect the app to the authRutes
require('./routes/authRoutes')(app);

// SERVER INITIALIZED
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running on port 5000'));
