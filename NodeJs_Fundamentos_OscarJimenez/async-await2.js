let empleados = [{
        id: 1,
        nombre: "Juan"
    },
    {
        id: 2,
        nombre: "Pepe"
    },
    {
        id: 3,
        nombre: "Ana"
    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 950
    }
];

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con id ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }

    });
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `El salario de ${resp.nombre} es de ${resp.salario}`;
}

getInformacion(10)
    .then(mensaje => console.log(mensaje))
    .catch(err => {
        console.log("Error en :", err)
    });