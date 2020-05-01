const fs = require('fs');

//let base = 3;

let crearArchivo = async(base) => {
    // return new Promise((resolve, reject) => {
    if (!Number(base)) {
        throw new Error(`el valor de ${base} no es valido`);
        // return;
    }

    let data = '';
    for (let i = 1; i <= 10; i++) {
        data += `${base} x ${i} = ${base*i}\n`;
    };

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw new Error(err);
        } else {
            return `el archivo de la tabal ${base} a sido creado!`
        }
    });
};

module.exports = {
    crearArchivo
};