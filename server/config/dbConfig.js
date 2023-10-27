const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongo DB Connection Successful");
    })
    .catch(err => {
        console.log("Mongo DB Connection Failed:", err.message);
    });

const db = mongoose.connection;

module.exports = db;

