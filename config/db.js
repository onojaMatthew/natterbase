const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,

    })
        .then(() => {
            console.log("Connected to database successful");
        })
        .catch(err => {
            console.log(`Failed to connect to database. Error: ${err.message}`);
        });
}