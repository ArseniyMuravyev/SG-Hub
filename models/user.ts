import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  image: {
    type: String,
  },
  numberOfFriends: {
    type: Number,
    required: true,
  },
  registrationData: {
    type: Date,
    required: true,
  },
  numberOfPosts: {
    type: Number,
    required: true,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
