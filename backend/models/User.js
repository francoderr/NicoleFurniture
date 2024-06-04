import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  priviledge: {
    type: String,
    default: "user",
  },
  assignedPost: {
    type: String,
    default: "",
  },
});

const Users = mongoose.model("User", UserSchema);

export default Users;
