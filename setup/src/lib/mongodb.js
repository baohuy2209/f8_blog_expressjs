const mongoose = require("mongoose");
const dbConfig = require("../config/db");
async function connect(onConnected) {
  const { host, port, dbName } = dbConfig;
  try {
    await mongoose.connect(`mongodb://${host}:${port}/${dbName}`);
    console.log("Connect to DB successfully !");
    if (typeof onConnected === "function") {
      onConnected();
    }
  } catch (error) {
    console.log("Connect to DB failure !");
  }
}
