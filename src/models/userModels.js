const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
        required:true
    }},
    {
    timestamps:true
    }

);

UserSchema.pre("save", function(next) {
    //Документ юзера який зберігається
    var user = this;

    // isModified - перевіряє чи поле значення змінилося - повертає буль (true or false)
    //isNew - перевіряє чи це новий документ - повертає буль (true or false)
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(12, function(err, salt) {
        if (err) {
          return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
    } else {
      return next();
    }
  });
  

const User = mongoose.model('user', UserSchema);
module.exports = User 
