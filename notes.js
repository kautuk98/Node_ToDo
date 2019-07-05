// console.log('Starting notes.js');
console.log("-----------------")

const fs = require('fs');

// console.log(module);

// module.exports.age =25;

 // module.exports.mul = (a,b) => {
//     console.log(a*b);
// };

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (err){
        return [];
    }
};

var saveNotes = (notes) => {
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


// Yargs using the command line arguments fethched from app.js
var addNote = (title,body) => {
    var notes = fetchNotes();
    var note ={
        title,
        body
    };
   var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
 return fetchNotes();
};

var delNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length ;
};

var readNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

// Function created because of the repeating order in the app.js 
var logNote = (note) => {
    debugger;
    console.log("*---*");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports ={
    addNote,
    getAll, 
    delNote,
    readNote,
    logNote
};


