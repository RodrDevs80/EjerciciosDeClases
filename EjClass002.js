/**Crear un objeto Libro que contiene el título y el autor. Se debe crear una función llamada 
mostrarInfo que imprima la información del libro. */

//objeto literal
const libro = {
    titulo: 'Informe sobre ciegos',
    autor: 'Ernesto Sabato'
}

const mostrarInfoLibro = (libro) => {
    if (libro instanceof Object) {
        if (Object.keys(libro).length != 0) {
            return `El libro se llama: "${libro.titulo}"\nSu autor es: "${libro.autor}"`;
        }
    }
    return `El parámetro ingresado no es valido!`;
}
console.log(mostrarInfoLibro(libro));

//clase
class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    infoLibro() {
        return `El libro se llama: "${this.titulo}"\nSu autor es: "${this.autor}"`;
    }
}
//instanciamos la clase Libro
const libro1 = new Libro('La peste', 'Camus');
console.log(libro1.infoLibro());