import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';




// define all the fields we want for the user
const userSchema = mongoose.Schema(
  {
    // since we want required we name: {type:string}
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  {
    timeStamps: true
  }
)

// password authentication with plaintext pw and match it with the bcrypt pw that is hashed
userSchema.methods.matchPasswords = async function (enteredPassword) {
  // compare let us cmpare plain text pw to bcrypt hashed pw
  return await bcrypt.compare(enteredPassword, this.password)
}


// before we save encrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  // encrypt here
  const salt = await bcrypt.genSalt(10);
  // hash
  this.password = await bcrypt.hash(this.password, salt);
})


const User = mongoose.model('User', userSchema)

export default User;