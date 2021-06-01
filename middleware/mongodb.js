import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;

  const db = await mongoose.connect(process.env.mongodburl, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;

export function jsonify(obj) {
  return JSON.parse(JSON.stringify(obj));
}
