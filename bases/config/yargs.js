//definimos los comandos para ejecutarlo en el terminal
let opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//Creamos descripciones para que el usuario tenga un ayuda por si no sabe la funcion
const argv = require('yargs')
    .command('listar', 'Imprime en consoloa la tabla de multiplicar ', opc)
    .command('crear', 'Creado ', opc)
    .help()
    .argv;

module.exports = {
    argv
}