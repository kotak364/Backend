const mongoose = require("mongoose");
// const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validator(value) {
//       if (value.toLowerCase().incldues("password")) {
//         throw new Error('Password cannot contain "password');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "Maulik",
// });

// const me = new User({
//   name: "Jaymeen",
//   email: "kotak",
// });

// const me = new User({
//   name: "   Jaymeen   ",
//   email: "kotak.JAymeen@gmail.com",
//   password: "Password123",
// });

// me.save()
//   .then(() => {
//     console.log(me, "result");
//   })
//   .catch((error) => {
//     console.log(error, "errors");
//   });

//chanllenge

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,

//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const task = new Task({
//   description: "Learn the Mongoose Library",
//   completed: true,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task, "task");
//   })
//   .catch((error) => {
//     console.log(error, "errors");
//   });









