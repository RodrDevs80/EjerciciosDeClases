/**Gestión de Alumnos
Enunciado:
Desarrolle una clase Alumno y una clase GestiónAlumnos que permitan realizar las siguientes 
operaciones:
Clase Alumno:
Almacenar la información de un alumno:
Número de matrícula
Nombre del alumno
Apellidos del alumno
Fecha de nacimiento
Notas de las asignaturas (en un array)
Calcular la media de las notas del alumno.
Permitir consultar la información del alumno.
******************************************************
Clase GestiónAlumnos:
Almacenar un conjunto de alumnos.
Agregar nuevos alumnos a la gestión.
Eliminar alumnos de la gestión.
Buscar alumnos por número de matrícula o nombre.
Actualizar las notas de un alumno en una asignatura específica.
Mostrar un listado de todos los alumnos en la gestión.
Mostrar la media general de las notas de todos los alumnos */
//clase alumno
class Alumno {
    constructor(numeroDeMatricula, nombreDelAlumno, fechaDeNacimiento) {
        this.numeroDeMatricula = numeroDeMatricula;
        this.nombreDelAlumno = nombreDelAlumno;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.notas = [];
    }
    cargarNota(materia, nota) {
        if (typeof materia == 'string' && typeof nota == 'number' && (nota > 0 && nota <= 10)) {
            this.notas.push({
                materia: materia,
                nota: nota
            })
        } else {
            console.log('Alguno de los datos ingresados no es valido!');
        }

    }

    Promedio() {
        return this.notas.reduce((acumulador, materia) => {
            return acumulador + materia.nota
        }, 0) / this.notas.length;
    }

    mostrarNotas() {
        for (let i = 0; i < this.notas.length; i++) {
            console.log(this.notas[i]);
        }
    }
    mostrarInfoAlumno() {
        return `Numero de Matricula: ${this.numeroDeMatricula}\nNombre del Alumno: ${this.nombreDelAlumno}\nFecha de Nacimiento: ${this.fechaDeNacimiento}`;
    }

    mostarNotaPorMateria(materia) {
        if (typeof (materia) == 'string' && isNaN(materia)) {
            for (let i = 0; i < this.notas.length; i++) {
                if (this.notas[i].materia.toLowerCase().includes(materia.toLowerCase())) {
                    return this.notas[i].nota;
                }

            }
            return 'No se encontró la materia solicitada';
        }
        return 'No se ingreso un dato valido para la búsqueda'
    }

}


const alumno1 = new Alumno(243, 'Pedro Baez', '24-03-1980');
const alumno2 = new Alumno(333, 'Ramon Chavez', '12-08-1990');
const alumno3 = new Alumno(128, 'Leonardo Bizconti', '01-09-2000');
alumno1.cargarNota('lengua', 10);
alumno1.cargarNota('matematica', 8);
alumno1.cargarNota('ciencias sociales', 13);
alumno3.cargarNota('lengua', 7);
alumno3.cargarNota('quimica', 10);
console.log(alumno1.mostrarInfoAlumno());
console.log('+++++++++++++++++++++++++++++++++++');
alumno1.mostrarNotas();
console.log(alumno1.mostarNotaPorMateria('lengua'));
console.log(alumno1.mostarNotaPorMateria(23));
console.log('+++++++++++++++++++++++++++++++++++');




class GestionAlumnos {
    constructor() {
        this.alumnos = [];
    }
    //cargar alumnos
    cargarAlumnos(alumno) {
        if (alumno instanceof Alumno && Object.keys(alumno).length != 0) {
            this.alumnos.push(alumno);
            console.log('Se agrego correctamente el nuevo alumno!');
        } else {
            console.log('Ingreso un dato no valido!');
        }
    }
    //eliminar alumno
    eliminarAlumnos(alumno) {
        if (alumno instanceof Alumno && alumno.numeroDeMatricula) {
            for (let i = 0; i < this.alumnos.length; i++) {
                if (this.alumnos[i].numeroDeMatricula == alumno.numeroDeMatricula) {
                    this.alumnos.splice(i, 1);
                    return console.log('Se elimino el alumno buscado correctamente!');
                }
            }
            return console.log('No se encontró al alumno que desea eliminar!');
        } else {
            console.log('Ingreso un dato no valido!');
        }
    }
    //buscar por matricula
    buscarAlumno(matricula) {
        if (typeof matricula == 'number' && matricula > 0) {
            for (let i = 0; i < this.alumnos.length; i++) {
                if (this.alumnos[i].numeroDeMatricula == matricula) {
                    return this.alumnos[i];
                }
            }
            return 'Error:No se encontró al alumno buscado!';
        } else {
            return 'Error:Ingreso un dato no valido!\nDebe ser un numero entero positivo';
        }
    }
    //actualizar notas
    actualizarNotas(matricula, materia, nuevaNota) {
        const alumno = this.buscarAlumno(matricula);
        if (typeof alumno == 'string') {
            return 'Error: no se encontró el alumno o se ingreso un dato invalido!';
        }
        if (typeof materia == 'string' && isNaN(materia)) {
            for (let i = 0; i < alumno.notas.length; i++) {
                alumno.notas[i].nota = nuevaNota;
                console.log(`Se modifico correctamente la nota de ${materia}`);
                return;
            }
            return 'No se encontró la materia ingresada!';

        } else {
            return 'Se ingreso un dato no valido!';
        }

    }
    //promedio General
    PromedioGeneral() {
        let acumulador = 0;
        let contador = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            for (let j = 0; j < this.alumnos[i].notas.length; j++) {
                //console.log(this.alumnos[i].notas[j].nota);
                acumulador += this.alumnos[i].notas[j].nota;
                contador++;
            }
        }
        return acumulador / contador;
    }
    //mostrar todos los alumnos en la gestión
    mostarAlumnos() {
        this.alumnos.forEach((alumno) => {
            console.log(alumno);
        })
    }

}




console.log('++++Gestión de Alumnos+++++');
const gestión1 = new GestionAlumnos();
gestión1.cargarAlumnos(alumno1);
gestión1.cargarAlumnos(alumno2);
gestión1.cargarAlumnos(alumno3);
console.log(gestión1.alumnos);
gestión1.eliminarAlumnos(alumno2);
console.log(gestión1.alumnos);
console.log(gestión1.buscarAlumno(alumno1.numeroDeMatricula));
console.log(gestión1.buscarAlumno(128));
console.log(gestión1.buscarAlumno('casa'));
console.log(gestión1.buscarAlumno(1234));
console.log('*****************************************');
gestión1.actualizarNotas(1234, 'lengua', 7);
gestión1.actualizarNotas(243, 'lengua', 5);
gestión1.actualizarNotas(222, 7);
console.log('****** después de modificar la nota de lengua a 5, alumno M°243 ');
alumno1.mostrarNotas();
console.log('******Mostrar Alumnos desde Gestión******');
gestión1.mostarAlumnos();
console.log('*****Promedio General****');
console.log(gestión1.PromedioGeneral());

