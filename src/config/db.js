const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const uri = process.env.DB_STRING;


async function connectDB() {
  try {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
  } catch(error) {
    console.log("Error in connecting db");
  }
}

module.exports = connectDB;


//pUzabrD2wBrRW2OY