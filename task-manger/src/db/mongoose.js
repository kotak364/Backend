const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: "Jaymeen",
//   age: 11,
// });

// me.save()
//   .then(() => {
//     console.log(me, "result");
//   })
//   .catch((error) => {
//     console.log(error, "errors");
//   });

//chanllenge

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task = new Task({
  description: "Learn the Mongoose Library",
  completed: true,
});

task
  .save()
  .then(() => {
    console.log(task, "task");
  })
  .catch((error) => {
    console.log(error, "errors");
  });
