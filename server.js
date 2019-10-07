const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const database = require("./config/db");
const validator = require("express-validator");
const app = express();

const port = process.env.PORT || 5000;

// connecting to database
database();

// Setting up middleware
app.use(express.static(__dirname));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(validator());

//implementing cross origin resourse sharing
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Authorization, Content-Type, Accept, X-Auth-Token,');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    }
    else {
        next();
    }
});
  
app.get("/", (req, res) => {
  res.json({ message: "Congrats! Your first project" });
});

// custom routes
require("./middleware/routes")(app);
  
// Starting and listening to server
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

// y
// t
// T
// onojamatthew59@gmail.com
// igochemat7@@