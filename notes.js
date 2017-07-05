const fs = require('fs');



let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };


  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  }catch (e) {

  }

  let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }

};

let getAll = () => {
  console.log("Getting all notes");
};

let readNote = (title) => {
  console.log("Reading note:", title )
}

let removeNote = (title) => {
  console.log("Removing this note:",title)
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
};
