const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const studentSchema = new Schema({
  fname: String,
  lname: String,
  grade: String,
  guardian: String,
  amount: Number,
  dueDate: Number,
  duplicate: Boolean,
  arears: Number,
  month:{
    areas: Number,
    current: String,
    advance: Number
  }
})

module.exports = mongoose.model('Student',studentSchema);
