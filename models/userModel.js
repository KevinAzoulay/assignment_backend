const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: String,
  First_Name: String,
  Last_Name: String,
  hash:  String,
  salt:  String,
  mentor : Boolean,
  password: String
});

module.exports = mongoose.model('user', userSchema);

