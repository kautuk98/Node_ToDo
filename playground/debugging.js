// This is a Debugging example for a code to be debugged using ChromeDev Tools.
// Through various commands you can come across the bugs in your code.
// For Debugging through Chrome we can use $ node --inspect-brk <file name>


var person = {
    name: "kautuk",
    age: 20
};


person.con = 123456789;

// This debugger is added to stop the sequence here only.
debugger; 
person.s = "Male";


person.name = "KT";


console.log(person);
