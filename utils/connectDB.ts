import mongoose from "mongoose";

const connnectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");

    return;
  }

  mongoose
    // @ts-ignore
    .connect(
      "mongodb+srv://admin:m1a2h3d4i5@cluster0.rkyeg.mongodb.net/nextjs-pinterest?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected DB");
    })
    .catch((err) => console.log(err));
};

export default connnectDB;
