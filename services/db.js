const mongoose = require('mongoose');

// un:teamj@gmail.com
// pw:inso4116

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  } catch (err) {
    process.exit(1);
  }
};

module.exports = connectDB;
