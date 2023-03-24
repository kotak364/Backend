const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/task-manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((client) => {
    console.log("DB CONNECTED");
    const dataBaseName = "task-manager";
    const db = client.db(dataBaseName);
    db.collection("users").insertOne({
      name: "Jaymeen",
      age: 27,
    });
  })
  .catch((err) => {
    console.log("DB NOT CONNECTED", err);
  });
