const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return "notes"
}

const addNote = function(title, body) {
    const notes = loadnotes();
    console.log(notes)
    const dupNotes = notes.filter(function (note) {
        
        return note.title === title
    })
    console.log(dupNotes.length)
    if (dupNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes);
        console.log("new note");
    }
}

const saveNote = function (notes) {
    const notesStr = JSON.stringify(notes);
    fs.writeFileSync("myjson1.json", notesStr);
}

const loadnotes = function () {
    try {
        const buf = fs.readFileSync("myjson1.json");
        const json = buf.toString();
        return JSON.parse(json);
    } catch (e) {
        return [];
    }
}

const removeNote = function (title, body) {
    const notes = loadnotes();
    console.log(notes);
    const newNotes = notes.filter(function (value, index, array) {
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
    addNote: addNote,
    removeNote: removeNote
}