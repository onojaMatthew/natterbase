const mongoose = require( "mongoose" );
const winston = require( "winston" );
const keys = require( "./keys" );

require("dotenv").config();

// let db_url;
// const env = process.env.NODE_ENV || 'development';
// if ( env === 'test' ) {
//   db_url = process.env.TEST_DB;
// } else {
//   db_url = process.env.DB_PROD;
// }


module.exports = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect( `${keys.MONGODB_URL}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    poolSize: 5,
    socketTimeoutMS: 45000,
    autoReconnect: true,
  })
    .then(() => {
     winston.info("Connection to database established");
    })
    .catch(err => {
      winston.error(`Failed to connect to db. ${err.message}`);
    } );
  
  mongoose.set( "useFindAndModify", false );
  mongoose.set( "useCreateIndex", true );
}
