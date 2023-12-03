const express = require("express");
const cors = require("cors");
require('dotenv').config();
const session = require('express-session');
// Google Login API
const keys = require('./app/config/key');

const passport = require('passport');
// Cookie session
// const cookieSession = require('cookie-session');
require('./app/services/passport');
// app.use(cookieSession({
//   maxAge: (30 * 24 * 60 * 60 * 1000),
//   keys: [keys.cookieKey]
// }));

// Initialize Express
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from the ReactJS frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies to be sent across origins
  optionsSuccessStatus: 204, // Set the preflight response status to 204 No Content
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to TTN application." });
});

// Get password from Google
app.use(session({ secret: 'tnhubh', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./app/routes/turorial.routes")(app);
require("./app/routes/project.routes")(app);
require("./app/routes/auth.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});