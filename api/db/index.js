const mongoose = require("mongoose");

const dbHost = "localhost";
const dbPort = 27017;
const dbName = "courses";

mongoose.set("strictQuery", true);

const connect = () => {
  const dbUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`;
  console.log("DB URL: ", dbUrl);
  return mongoose.connect(dbUrl);
};

module.exports = {
  connect,
};
