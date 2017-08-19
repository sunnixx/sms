const mongoose = require('mongoose'),
      bcrypt = require('bcrypt-nodejs'),
      Schema = mongoose.Schema;

//User Schema
const UserSchema = new Schema({
    username: String,
    password: String,
    email: {type: String, unique: true},

    profile:{
      name: String,
      picture: String,
    },

    role: String
})

//Hash Password before sending it to the DATABASE
UserSchema.pre('save',function(next){
  const user = this;
  if(!user.isModified('password')) return next();

  bcrypt.genSalt(10,function(err,salt){
    if(err) return next(err);
    bcrypt.hash(user.password,salt,null,function(err,hash){
      if(err) return next(err)
      user.password = hash;
      next();
    })
  })
})

//Compare Password
UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('User',UserSchema);
