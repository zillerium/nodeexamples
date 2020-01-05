const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "notes"
}

const readNote = (title) => {
    const notes = loadnotes();
    const dupN = notes.find((note) => note.title === title)
    if (!dupN) {
        console.log("note not found");
    } else {
        console.log("note found");
    }
}

const addNote = (title, body) => {
    const notes = loadnotes();
    console.log(notes)
    const dupNotes = notes.filter((note) => {
        
        return note.title === title
    })
    const duplicateNote = notes.find((note) => note.title === title)

    console.log(dupNotes.length)
  //  if (duplicateNotes.length == 0) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes);
        console.log("new note");
    }
}

const saveNote = (notes) => {
    const notesStr = JSON.stringify(notes);
    fs.writeFileSync("myjson1.json", notesStr);
}

const loadnotes = () => {
    try {
        const buf = fs.readFileSync("myjson1.json");
        const json = buf.toString();
        return JSON.parse(json);
    } catch (e) {
        return [];
    }
}

const listNotes = () => {
    const notes = loadnotes();
    notes.forEach(note => {
        console.log(note + ' at ' + note.title);
     });
    
}

const removeNote = (title, body) => {
    const notes = loadnotes();
    console.log(notes);
    const newNotes = notes.filter( (value, index, array) => {
        //console.log("title, "+title)
        //console.log("value " +value.title)
         if (value.title === title) {
            console.log(chalk.green('removed'+value.title))
         } else {
           // chalk.blue.bgbold("kept" + value.title)
            return value
         }
    })
    console.log(newNotes);
    saveNote(newNotes);
    return newNotes;
}

module.exports = {
    getNotes: getNotes,
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
