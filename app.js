console.log("\n");
console.log("TO-DO App || Node.js");

const fs = require('fs');

// const os = require('os');

// Loading the full build of lodash module downloaded from npm
const _ = require('lodash');

// Requiring Yargs 
const yargs = require('yargs');

const notes = require('C:/Users/HP/Desktop/NodeTodo/notes.js');

// Checking if the the loadash module is working properly
// console.log(_.isString('Kautuk'));
// console.log(_.isString(1));
// console.log(_.uniq(['kt',1,2,3,3,4,2]));

// console.log('Result:', notes.mul(2,20));

// var user = os.userInfo();
//console.log(user);

//fs.appendFileSync('greeting.txt','Hello '+ user.username + '!'); 
//due to the new versions from v6 above they take a function as an argument or a sync to get it started
// we can do the same thing as above with the ES6 script

// fs.appendFileSync('greeting.txt',`Hello ${user.username} ! You are ${notes.age} years old !`);

// Logging the command line inputs through process object and arg vector 
// Argv is used to make an array of the arguments passed in the app.js

const titleOptions = {
    title: {
        describe: 'Title of the Note',
        demand: true,
        alias: 't'
    }
}

const argv = yargs
.command('add' , 'To add a new Note', {
    title: titleOptions,
    body: {
        describe: 'Body of the note',
        demand: true,
        alias: 'b'
    }
})
.command('list', 'Listing all Notes')
.command('read', 'Reading all Notes',{
    title: titleOptions
}) 
.command('delete', 'Deleting Note', {
    title: titleOptions
})
.help()
.argv;

var command = argv._[0];
// console.log('Command:',command);
// console.log(process.argv);
// console.log('Yargs', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note) 
    {
        console.log("Note Created");
        notes.logNote(note);
    }
    else 
    {
        console.log("Note title taken");
    }

} else if(command === 'list')
{
   var allNotes = notes.getAll();
   console.log(`Printing ${allNotes.length} note(s).`);
   allNotes.forEach((note) => notes.logNote(note));
} 
    else if (command === 'delete') 
    {
        var noteRemove = notes.delNote(argv.title);
        var message = noteRemove ? "Note was Removed" : "Note was not Found";
        console.log(message);
    }

  else if (command === 'read') 
  {
    var note = notes.readNote(argv.title);
        if(note)
        {
            console.log("Note Read");
            notes.logNote(note);
        } else {
            console.log("Note was not Found"); 
        }
    }  else
{
    console.log('Command not found !!!');
}
console.log("\n")
