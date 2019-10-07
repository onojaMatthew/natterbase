const mongoose = require("mongoose");

require("dotenv").config();



module.exports = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(`${process.env.DB_URL}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
    .then(() => {
     console.log("Connection to database established");
    })
    .catch(err => {
      console.error(`Failed to connect to db. ${err.message}`);
    });
}
