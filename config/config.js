require( "dotenv" ).config();

module.exports = {
  MONGODB_URL: process.env.DB_PROD
};
