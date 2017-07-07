const fs = require('fs');


let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

let getAll = () => {
  console.log("Getting all notes");
};

let readNote = (title) => {
  console.log("Reading note:", title )
}

let removeNote = (title) => {
  let notes = fetchNotes();
  let keepNotes = notes.filter((note) => {
    return note.title != title;
  })
  saveNotes(keepNotes);

  return notes.length !== keepNotes.length;
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
};
