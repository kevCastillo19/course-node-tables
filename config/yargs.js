const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Define un limite hasta el cual multiplicar'
        }
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;