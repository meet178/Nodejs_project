const mongoose = require('mongoose')
const bcrypt = require('bcrypt'),
  SALT_WORK_FACTOR = 10
const Schema = mongoose.Schema

const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  MoNum: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  GST_Num: {
    type: Number,
    required: true,
  },
  Address: {
    type: String
  },
  Role: {
    type: String,
    required: true,
  },
  City: {
    type: String
  },
  District: {
    type: String
  },
  File: {
    type: String,
  },
})

userSchema.pre('save', function(next){
  const user = this

  if(!user.isModified('Password')) return next()

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err) return next(err)

    bcrypt.hash(user.Password , salt, function(err,hash){
      if(err) return next(err)

      user.Password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function(candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.Password, function(err, isMatch){
    if (err) return cb(err)
    cb(null, isMatch)
  })
}  
userSchema.index({ Name: 'text'})

module.exports = mongoose.model('users', userSchema)