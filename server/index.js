/* MAIN SERVER FILE */

//  DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

// Connect the database
mongoose.connect(keys.mongoURI);

// APP
const app = express();

app.use(bodyParser.json());
// Use cookies and tell passport about it
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Connect the app to the authRutes
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

// SERVER INIT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
