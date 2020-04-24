// setTimeout(() => {
//     console.log("Hola, muchach@s!");
// }, 3000);

let getUsuarioById = (id, nickname, callback) => {
    let n = nickname + " perez"
    let usuario = {
        nombre: n,
        id
    }

    if (id === 20) {
        callback(`El usuario con id ${id} no existe!`);
    } else {
        callback(null, usuario, 25);
    }


}

getUsuarioById(10, 'pepito', (err, usuario, edad) => {
    if (err) {
        return console.log(err);
    }

    console.log("Usuario de la BD:", usuario, `edad: ${edad}`);
});