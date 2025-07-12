import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    desc: {
      type: String,
      unique: true,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.models.Posts || mongoose.model("Posts", postSchema);

export default Post;
