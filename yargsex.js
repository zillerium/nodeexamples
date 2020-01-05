//const fs = require('fs');
//const validator = require('validator');
const notes = require('./notes.js');
//const add = require('./utils.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.4.0');

yargs.command({
   command: 'add',
   describe: 'add a new note',
   builder: {
     title: {
        describe: "note"
     },
   },
    handler:  (argv) => {
      console.log('adding a new note', `${argv.title}`);
  },
}).argv

console.log(process.argv)
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