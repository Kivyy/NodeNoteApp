console.log('Starting note.js')


let addNote = (title, body) => {
  console.log(title, body);
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
