const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const studentSchema = new Schema({
  fname: String,
  lname: String,
  grade: String,
  guardianName: String,
  dob: String,
  status: String
})

module.exports = mongoose.model('Student',studentSchema);
