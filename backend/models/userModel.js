import mongoose from 'mongoose'




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



const User = mongoose.model('User', userSchema)

export default User;