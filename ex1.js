//const fs = require('fs');
//const validator = require('validator');
const notes = require('./notes-new.js');
//const add = require('./utils.js');
const chalk = require('chalk');
const yargs = require('yargs');

console.log(notes)
yargs.version('1.4.0');

yargs.command({
   command: 'add',
   describe: 'add a new note',
   builder: {
     title: {
        describe: "note",
        demandOption: true,
        type: 'string'
     },
     body: {
        describe: "body",
        demandOption: true,
        type: 'string'
     },
   },
    handler:  (argv) => {
     // console.log('adding a new note', `${argv.title}`);
     // console.log('adding a new body', `${argv.body}`);
     notes.addNote(`${argv.title}`,`${argv.body}`)
  },
}).argv

yargs.parse()

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
      title: {
         describe: "note",
         demandOption: true,
         type: 'string'
      },
    },
     handler:  (argv) => {
      // console.log('adding a new note', `${argv.title}`);
      // console.log('adding a new body', `${argv.body}`);
      notes.removeNote(`${argv.title}`)
   },
 }).argv

 yargs.parse()


 yargs.command({
   command: 'list',
   describe: 'list note',
   builder: {
     title: {
        describe: "note",
        demandOption: true,
        type: 'string'
     },
   },
    handler:  (argv) => {
     // console.log('adding a new note', `${argv.title}`);
     // console.log('adding a new body', `${argv.body}`);
     notes.listNotes(`${argv.title}`)
  },
}).argv

yargs.parse()


 yargs.command({
   command: 'readNote',
   describe: 'readNote note',
   builder: {
     title: {
        describe: "note",
        demandOption: true,
        type: 'string'
     },
   },
    handler:  (argv) => {
     // console.log('adding a new note', `${argv.title}`);
     // console.log('adding a new body', `${argv.body}`);
     notes.readNote(`${argv.title}`)
  },
}).argv

yargs.parse()




//console.log(process.argv)
/*if (process.argv[2] === 'add') {
    console.log('adding ....')
}

console.log(process.argv)
console.log(yargs.argv)
console.log(chalk.blue.bold('success'));

const sum = add(5,6)
//fs.writeFileSync("revor.txt","my test text\n");
console.log(sum)
const mynote = notes();
console.log(mynote);
console.log(validator.isURL('http://merrows.co.uk'))
*/
//fs.appendFileSync("revor.txt","my test text - new line");
