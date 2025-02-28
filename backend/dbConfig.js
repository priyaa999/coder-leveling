const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
    
  } catch (error) {
    console.error("Error:",error);
    process.exit(1)
  }
};

module.exports = {connectToDB}