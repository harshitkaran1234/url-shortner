const dotenv = require('dotenv');
const mongoose = require('mongoose');


async function connectDB(uri) {
  try {
    console.log('???');
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('++++++++');
  } catch(error) {
    console.log("Error in connecting db");
  }
}

module.exports = connectDB;
