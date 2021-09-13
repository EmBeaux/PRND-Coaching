import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  fullName: String,
  phoneNumber: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model("User", UserSchema);
export default User;