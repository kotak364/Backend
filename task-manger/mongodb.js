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

const mongodb = require("mongodb");
const { MongoClient, ObjectId } = require("mongodb");
// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const id = new ObjectId();

// console.log(id, "id");
// console.log(id.id.length, "length");
// console.log(id.toHexString().length, "toHexString");
// console.log(id.getTimestamp());
const dbName = "task-manager";
const db = client.db(dbName);

async function main() {
  // Use connect method to connect to the server
  await client.connect();

  // insertOne - insert one documents at a time
  db.collection("users").insertOne(
    {
      name: "Jaymeen",
      age: 27,
    },
    (error, r) => {
      if (error) {
        return console.log("Unable to insert user");
      } else {
        console.log(r.ops);
      }
    }
  );

  // insertMany - insertMany documents at a time
  db.collection("users").insertMany(
    [
      {
        name: "Jaymeen",
        age: 27,
      },
      {
        name: "yash",
        age: 27,
      },
      {
        name: "Mahin",
        age: 27,
      },
    ],
    (error, r) => {
      if (error) {
        return console.log("Unable to insert user");
      } else {
        console.log(r.ops);
      }
    }
  );

  //Provide custome Id If you want
  db.collection("users").insertOne(
    { _id: id, name: "Malay", age: 27 },
    (error, r) => {
      if (error) {
        return console.log("Unable to insert user");
      } else {
        console.log(r.ops);
      }
    }
  );

  // fetch data
  //findOne return only one documents
  // const data = await db.collection("users").findOne({ name: "Maulik" });
  // const data = await db.collection("users").findOne({ name: "Maulik", age: 1 });
  const data = await db
    .collection("users")
    .findOne({ _id: new ObjectId("641ee213e0cdf0b7c986137e") });
  if (data) {
    console.log(data, "data");
  } else {
    console.log("No data match");
  }

  //find return all matches documents
  // const data = await db.collection("users").find({ age: 27 }).toArray();
  // const data = await db.collection("users").find({ age: 27 }).count();
  // if (data) {
  //   console.log(data, "data");
  // } else {
  //   console.log("No data match");
  // }

  //update method
  //first way
  // const updateData = db.collection("users").updateOne(
  //   {
  //     _id: new ObjectId("641d9cb591f669f1336fc509"),
  //   },
  //   {
  //     $set: {
  //       name: "Rockstar",
  //     },
  //   }
  // );

  // updateData
  //   .then((result) => {
  //     console.log(result, "result");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //second way
  // db.collection("users")
  //   .updateOne(
  //     {
  //       _id: new ObjectId("641d9cb591f669f1336fc509"),
  //     },
  //     {
  //       $set: {
  //         name: "Rockstar",
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result, "result");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // db.collection("users")
  //   .updateOne(
  //     {
  //       _id: new ObjectId("641d9cb591f669f1336fc509"),
  //     },
  //     {
  //       $inc: {
  //         age: 1,
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result, "result");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

//updateMany






}
main().then(console.log("connection successfully")).catch(console.error);
