const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  birthdate: { type: Date, required: true },
  birthplace: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true }
});


module.exports = mongoose.model('UserData', userSchema);