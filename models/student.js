const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const studentSchema = new Schema({
  rollNo: {type:String, unique:true},
  fname: String,
  lname: String,
  guardian: String,
  amount: Number,
  grade: String,
  gender: String,
  issueDate: Date,
  feeMonth: String,
  dueDate: Date,
  admissionFee: Number,
  securityDeposit: Number,
  annualFee: Number,
  course: Number,
  arrears: Number,
  duplicateChallan: Number,
  bDuplicateChallan: Boolean,
  feeReminders: Number,
  Photocopies: Number,
  others: Number
})

module.exports = mongoose.model('Student',studentSchema);
