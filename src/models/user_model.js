import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String }, // , select: false },
});


UserSchema.set('toJSON', {
  virtuals: true,
});


UserSchema.pre('save', function beforeUserModelSave(next) {
  // only hash the password if it has been modified (or is new)

  const user = this;

  if (!user.isModified('password')) return next();

  // this is a reference to our model
  // the function runs in some other context so DO NOT bind it


  // when done run the next callback with no arguments
  // call next with an error if you encounter one
  // return next();

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        return next(err);
      }
      user.password = hash;
      return next();
    });
  });
});


//  note use of named function rather than arrow notation
//  this arrow notation is lexically scoped and prevents binding scope, which mongoose relies on
UserSchema.methods.comparePassword = function comparePassword(candidatePassword, callback) {
  // return callback(null, comparisonResult) for success
  // or callback(error) in the error case

  bcrypt.compare(candidatePassword, this.password, (error, result) => {
    if (error) return callback(error);
    return callback(null, result);
  });
};

// create model class
const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
