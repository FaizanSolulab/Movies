const mongoose = require("mongoose");
const logger = require("./logger")

const connectDb = async () => {
  try {
    const connectionString = "mongodb+srv://admin:admin@faizancluster.avwkdbg.mongodb.net/sample_mflix?retryWrites=true&w=majority"
    const connect = await mongoose.connect(connectionString);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );

  } catch (err) {
    logger.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
