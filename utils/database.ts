import mongoose from "mongoose";

let isConnected = false;

const mongoDbUri = process.env.MONGODB_URI ?? "";

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Database is already connected");
    return;
  }

  try {
    await mongoose.connect(mongoDbUri, {
      dbName: "share_prompt",
    });

    isConnected = true;
    console.log("mongodb is connected");
  } catch (error) {
    console.log(error);
  }
};
