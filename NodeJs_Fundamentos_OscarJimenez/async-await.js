/**
 * Pruebas de async y await
 */

// let getNombre = async() => {
//     throw new Error("No existe el usuario en BD");
//     return "Rodrigo";
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Rodrigo");
        }, 3000);
        // reject("Error al consultar el nombre");
    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log("Error en el Saludo:", err);
});

// console.log(getNombre());

// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(err => {
//     console.log("Error en el ASYNC:", err);
// });