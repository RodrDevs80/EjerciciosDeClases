const notas = [{ materia: 'lengua', nota: 10 }, { materia: 'matematica', nota: 9 }, { materia: 'ciencias sociales', nota: 7 }, { materia: 'FEyC', nota: 10 }];

const alumnos = [{
    numeroDeMatricula: 122,
    nombreDelAlumno: 'Carlos Duarte',
    fechaDeNacimiento: '12-05-2000', notas: [{ materia: 'lengua', nota: 10 }, { materia: 'matematica', nota: 9 }]
}, {
    numeroDeMatricula: 245,
    nombreDelAlumno: 'Omar Vazquez',
    fechaDeNacimiento: '03-09-1899', notas: [{ materia: 'ciencias sociales', nota: 7 }, { materia: 'FEyC', nota: 10 }]
}
]
const promedio = () => {
    return (notas.reduce((acumulador, asignatura) => {
        return acumulador + asignatura.nota;
    }, 0) / notas.length);
}



const sumaNotas = notas.reduce((acumulador, materia) => {
    return acumulador + materia.nota
}, 0)
console.log(sumaNotas);
console.log(promedio());

const mostarNotaPorMateria = (materia) => {

    let nota;
    if (typeof (materia) == 'string' && isNaN(materia)) {
        for (let i = 0; i < notas.length; i++) {
            if (notas[i].materia.toLowerCase().includes(materia.toLowerCase())) {
                return nota = notas[i].nota;
            }

        }
        return 'No se encontró la materia solicitada';
    }
    return 'No se ingreso un dato valido para la búsqueda'

}

console.log('++++++++++++++++++++++++++++++++++++++++++');
console.log(mostarNotaPorMateria('lengua'));
console.log(mostarNotaPorMateria('feyc'));
console.log(mostarNotaPorMateria('23455'));
console.log(mostarNotaPorMateria(90));
console.log(mostarNotaPorMateria('quimica'));

const colores = ["rojo", "azul", "verde", "amarillo"];

colores.splice(1, 1);//elimina el indice 1, sintaxis desde el index 1 hasta el 1
console.log("Array actualizado:", colores); //Array actualizado: [ 'rojo', 'verde', 'amarillo' ]

const promedioGeneralReduce = (alumnos) => {
    const notas = alumnos.flatMap(alumno => alumno.notas); // Aplana el arreglo de notas
    const sumaTotal = notas.reduce((acumulador, notaActual) => acumulador + notaActual.nota, 0); // Suma total de notas
    const cantidadNotas = notas.length; // Cantidad total de notas
    return sumaTotal / cantidadNotas;
}
const mostrarNotas = (alumnos) => {
    const notas = alumnos.flatMap(alumno => alumno.notas); // Aplana el arreglo de notas
    notas.forEach((notas) => { console.log(notas.nota); });
}

console.log('*********Promedio General********');
mostrarNotas(alumnos);
console.log('Promedio:', promedioGeneralReduce(alumnos));
