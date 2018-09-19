const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profileImage: { type: String, pattern: /^https?:\/\/.+/ },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false }
});

userSchema.virtual('articles', {
  localField: '_id',
  foreignField: 'user',
  ref: 'Article'
});


userSchema.virtual('profileImageSRC')
  .get(function () {
    return this.profileImage || 'https://startupsclub.com/image/user-default.png';
  });

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPasswordsMatch(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do not match');
  }

  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }

  next();
});


userSchema.pre('remove', function removeUserArticles(next) {
  this.model('Article').remove({ user: this._id }, next);
});


userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
