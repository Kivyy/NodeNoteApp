console.log('Starting App.js')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

let argv = yargs.argv;
let command = process.argv[2];

console.log(argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note){
      console.log("Successfully added note", note )
    } else {
      console.log("Note already exist, please try it again.")
    };

} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => {
    console.log('--------------------');
    console.log(`Title: ${note.title}`);
    console.log('--------------------');
    console.log(`Body: ${note.body}`);
  });
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message);
} else if (command === 'read') {
  let readNote = notes.readNote(argv.title);
  if(readNote){
    console.log('--------------------');
    console.log(`Title: ${readNote.title}`);
    console.log('--------------------');
    console.log(`Body: ${readNote.body}`);
  } else {
    console.log("Note not found");
  }
} else {
  console.log('Command not recognized');
}
