import mongoose from "mongoose";

const connnectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");

    return;
  }

  mongoose
  // @ts-ignore
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("connected DB");
    })
    .catch((err) => console.log(err));
};

export default connnectDB;
