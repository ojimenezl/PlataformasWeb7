//Llamar a funciones de distintos archivos
var colors = require('colors/safe')
const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//creamos variables para llamar a los argv
let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;


// Menu del programa
switch (comando) {
    case 'listar':
        // console.log("hay que listar");
        listarTabla(base, limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err.mensaje));
        break;
    case 'crear':
        // console.log("object craer archivo");
        crearArchivo(base, limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err.mensaje));
        break;
    default:
        console.log("NO VALIDO".red);
}