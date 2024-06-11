/**Crear un objeto Banco que contiene el nombre del banco y una lista de clientes (objetos de la 
clase Cliente). Se debe crear una función llamada agregarCliente para añadir un cliente a la lista y
otra función llamada mostrarClientes que imprima la información de todos los clientes del banco. */

//objeto literal 

const banco = {
    nombreBanco: 'PepeBank',
    listaClientes: []
}
const cliente = {
    nombre: 'Pedro',
    edad: 36
}
const cliente1 = {
    nombre: 'Omar',
    edad: 22
}
const cliente2 = {
    nombre: 'Raul',
    edad: 55
}
const cliente3 = {
    nombre: 'Walter',
    edad: 18
}

//función agregar cliente al final o al principio de la lista
const agregarCliente = (banco, nuevoCliente, ultimo = true) => {
    if (banco instanceof Object) {
        if (nuevoCliente instanceof Object && Object.keys(nuevoCliente).length != 0) {
            ultimo ? banco.listaClientes.push(nuevoCliente) : banco.listaClientes.unshift(nuevoCliente);
        } else {
            return 'El dato que intenta agregar a la lista de clientes no es valido!'
        }
    } else {
        return 'Uno de los datos ingresados no es un objeto!';
    }
}
//mostrar clientes
const mostrarClientes = (clientes) => {
    //const isArray = clientes instanceof Array;
    //console.log(isArray);
    if (clientes instanceof Array) {
        for (const cliente of clientes) {
            console.table(cliente)
        }
    } else {
        console.log('El dato ingresado no es un array!');
    }

}
//agregando clientes...
agregarCliente(banco, cliente);
agregarCliente(banco, cliente1);
agregarCliente(banco, cliente2, false);
agregarCliente(banco, cliente3, false);
console.log(banco.listaClientes);
console.log('-------------------------------------');
console.log('Mostrando clientes');
mostrarClientes(banco.listaClientes);

//clase
class Banco {
    constructor(nombreBanco, clientes) {
        this.nombreBanco = nombreBanco;
        this.clientes = clientes;
    }
    addCliente(nuevoCliente, alFinal = true) {
        if (nuevoCliente instanceof Object && Object.keys(nuevoCliente).length != 0) {
            alFinal ? this.clientes.push(nuevoCliente) : this.clientes.unshift(nuevoCliente);
        } else {
            return 'El dato que intenta agregar a la lista de clientes no es valido!'
        }
    }
    showClientes() {
        for (const cliente of this.clientes) {
            console.table(cliente);
        }
    }

}
//mostrando clientes con la clase
const banco1 = new Banco('MasterBank', [cliente, cliente1, cliente2, cliente3]);
console.log('******Mostrando clientes desde la clase******');
banco1.showClientes();
const cliente4 = {
    nombre: 'Morena',
    edad: 56
}
const cliente5 = {
    nombre: 'Federico',
    edad: 33
}

console.log('******Agregando clientes desde la clase******');
banco1.addCliente(cliente4, false);
banco1.addCliente(cliente5);

banco1.showClientes();