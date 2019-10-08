const express = require("express");
const morgan = require( "morgan" );
const winston = require( 'winston' );
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
app.use(validator());

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

// Error logger
require( "./config/error-logger" )();

// custom routes
require("./middleware/routes")(app);
  
// Starting and listening to server
app.listen( port, ( err ) => {
  if ( err ) {
    winston.error( `Something went wrong. ${ err.message }` );
  }
  winston.info(`Server is up and running on port ${port}`);
});


module.exports = app;


// y
// t
// T
// onojamatthew59@gmail.com
// igochemat7@@

//prd se
// const helmet = require( 'helmet' );
// const compression = require( 'compression' );

// module.exports = function ( app ) {
//   app.use( helmet() );
//   app.use( compression() );
// }

// const winston = require( 'winston' );
// const config = require( 'config' );
// require( 'winston-mongodb' );
// require( 'express-async-errors' );

// module.exports = function () {
//   winston.handleExceptions(
//     new winston.transports.File( { filename: 'uncaughtException.log' } ),
//     new winston.transports.Console( { colorize: true, prettyPrint: true } )
//   )

//   process.on( 'unhandledRejection', ( ex ) => {
//     throw ex;
//   } );

//   winston.add( winston.transports.File, { filename: 'logFile.log' } );
//   winston.add( winston.transports.MongoDB, {
//     db: config.get( 'dbUrl' ),
//     level: 'info'
//   } );
// }
