const mongoose = require("mongoose");
async function mongoConnect() {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log("Connection Successful...");
    } catch (err) {
        console.error(err);
        throw new Error("MongoDB connection error");
    }
}

module.exports = mongoConnect;