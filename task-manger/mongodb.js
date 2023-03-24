// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/task-manager", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((client) => {
//     console.log("DB CONNECTED");
//     const dataBaseName = "task-manager";
//     const db = client.db(dataBaseName);
//     db.collection("users").insertOne({
//       name: "Jaymeen",
//       age: 27,
//     });
//   })
//   .catch((err) => {
//     console.log("DB NOT CONNECTED", err);
//   });

const { MongoClient } = require("mongodb");
// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "task-manager";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  db.collection("users").insertOne({
    name: "Andrew",
    age: 27,
  });
}

main().then(console.log).catch(console.error);
