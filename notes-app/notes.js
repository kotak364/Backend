const chalk = require("chalk");
const fs = require("fs");
const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title taken");
  }
};

const readNote = function (title) {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const removeNote = function (title, body) {
  const notes = loadNotes();

  const removeNotes = notes.filter((note) => note.title !== title);
  console.log(removeNotes, "removeNotes");

  if (removeNotes.length > 0) {
    saveNotes(removeNotes);
    console.log(chalk.green.inverse("notes removed"));
  } else {
    console.log(chalk.red.inverse("No Notes found"));
  }
};

const listNote = function () {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your notes"));
  notes.forEach((note) => {
    console.log(note.title, "notes title");
  });
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
