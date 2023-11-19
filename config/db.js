const mongoose = require('mongoose');
process.env['SUPPRESS_NO_CONFIG_WARNING'] = 'y';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://emrecor:emreeray6718@cluster0.linh8wn.mongodb.net/'
    );
    console.log('mongo db connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
