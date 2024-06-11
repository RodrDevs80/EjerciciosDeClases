/**Saludo: Crear objeto cliente que contiene su nombre y edad. Se debe crear una función 
llamada saludarCliente que imprima un mensaje de saludo utilizando la información 
proporcionada en el objeto */

//objeto literal
const cliente = {
    nombre: 'pedro',
    edad: 15
}

const saludar = (cliente) => {
    if (cliente instanceof Object) {
        if (Object.keys(cliente).length != 0) {
            return `Hola, soy ${cliente.nombre} y tengo ${cliente.edad} años`;
        }
    }
    return `El parámetro ingresado no es valido!`;
}
const c = {};
// console.log(saludar(c));
// console.log(saludar(5));
console.log(saludar(cliente));
//clase
class Cliente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludo() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
}
//instanciamos la clase Cliente
const cliente1 = new Cliente('Omar', 22);
console.log(cliente1.saludo());