const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
// const getNotes = require('./notes.js');
const getNotes = require("./notes.js");

const command = process.argv[2];

// console.log(process.argv)

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// console.log(yargs.argv);
// yargs.version('1.1.0');

//Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Notes body",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    // console.log("Adding a new note", argv)
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//Create list commond

yargs.command({
  command: "list",
  describe: "List your note",
  handler: function (argv) {
    notes.listNote();
  },
});

//Create read commond

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Notes body",
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

//Create remove commond

// console.log(yargs.argv)
yargs.parse();
