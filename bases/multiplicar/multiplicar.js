const fs = require('fs');
const colors = require('colors')

//funcion para crear archivos , base es el numero a multiplicar y limte hasta donde lo va hacer
let crearArchivo = (base, limite = 5) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor de ${base} no es valido`.red);
            return;
        }

        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`el archivo de la tabal ${base} a ${limite} sido creado!`.green);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`el valor de ${base} o de ${limite} no es valido`.red);
            return;
        }
        console.log(colors.red(`=============TABLA DEL ${base}================`));
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;

        };
        console.log(data.yellow);
        console.log("=============================".green);
    });

}

module.exports = {
    crearArchivo,
    listarTabla
};