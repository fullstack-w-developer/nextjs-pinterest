import mongoose from "mongoose";

const postModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 20,
    },
    profile: {
      type: String,
      required: true,
    
    },
    post: {
      type: String,
      required: true,
    },
    followers: {
      type: Number,
      default: 0,
    },
    comments: Array,
    titlePost:{
      type: String,
    },
    descriptionPost:{
      type: String,
    },
    bgProfile:{
      type: String,
    },
    following:{
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

const Post =
  mongoose.models.post || mongoose.model("post", postModel);

export default Post;
