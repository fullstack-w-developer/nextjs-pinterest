import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://s.pinimg.com/images/user/default_75.png",
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },
    saved: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
// @ts-ignore
export default mongoose.models.user ||
  mongoose.model("user", UserSchema);
