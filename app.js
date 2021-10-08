const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// const base = 6;

// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

createFile(argv.b, argv.l, argv.h)
    .then(file => console.log(`${file} ha sido creado`.green))
    .catch(err => console.log(err))

// console.log(process.argv)
// console.log(argv)