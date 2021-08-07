import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  fullName: String,
  phoneNumber: String
});

const User = mongoose.model("User", UserSchema);
export default User;