/**Cuenta Bancaria
Enunciado:
Desarrolle una clase CuentaBancaria que permita realizar las siguientes operaciones:
Apertura de cuenta:
La apertura de la cuenta debe requerir el nombre del titular y el saldo inicial.
El saldo inicial debe ser un valor positivo.
Consulta de saldo:
Debe permitir consultar el saldo actual de la cuenta.
Depósito:
Debe permitir realizar depósitos en la cuenta.
El monto del depósito debe ser un valor positivo.
Retiro:
Debe permitir realizar retiros de la cuenta.
El monto del retiro no debe superar el saldo disponible.
Se debe mostrar un mensaje en caso de que el retiro sea superior al saldo disponible.
Restricciones:
No se deben permitir retiros que dejen la cuenta con saldo negativo.
Se debe registrar el historial de transacciones (depósitos y retiros) en un array. */

class CuentaBancaria {
    constructor(nombreTitular, saldoInicial) {
        if (saldoInicial <= 0) {
            throw new Error('El saldo inicial debe ser un valor positivo');
        }

        this.nombreTitular = nombreTitular;
        this.saldo = saldoInicial;
        this.historialTransacciones = [];
    }

    getSaldo() {
        return `El saldo de la cuenta es ${this.saldo}`;
    }

    deposito(monto) {
        if (monto > 0) {
            this.saldo += monto;
            this.historialTransacciones.push({
                tipoDeOperacion: 'Deposito',
                fecha: new Date(),
                cantidad: monto,
                saldoFinal: this.saldo
            })
        } else {
            console.log('El monto a depositar debe ser un valor positivo mayor a cero');
        }
    }

    retiro(monto) {
        if (monto > 0) {
            if (monto <= this.saldo) {
                this.saldo -= monto;
                this.historialTransacciones.push({
                    tipoDeOperacion: 'Retiro',
                    fecha: new Date(),
                    cantidad: monto,
                    saldoFinal: this.saldo
                })
            } else {
                console.log('No cuenta con fondos suficientes!');
            }
        } else {
            console.log('el monto a retirar debe ser un numero positivo!');
        }


    }

    getHistorialDepositos() {
        const depositos = []
        for (let i = 0; i < this.historialTransacciones.length; i++) {
            if (this.historialTransacciones[i].tipoDeOperacion == 'Deposito') {
                depositos.push(this.historialTransacciones[i]);
            }

        }
        return depositos;
    }
    getHistorialRetiros() {
        const retiros = []
        for (let i = 0; i < this.historialTransacciones.length; i++) {
            if (this.historialTransacciones[i].tipoDeOperacion == 'Retiro') {
                retiros.push(this.historialTransacciones[i]);
            }

        }
        return retiros;
    }
}


const cuentaB = new CuentaBancaria('Pedro', 200);
console.log(cuentaB.getSaldo());
cuentaB.deposito(400);
cuentaB.deposito(900);
cuentaB.retiro(500);
cuentaB.retiro(1000);
console.log('***Intento Retirar un montos indebidos***');
cuentaB.retiro(300);
cuentaB.retiro(-690);
console.log('***Mostrando Todo el Historial de movimientos de la cuenta***');
console.log(cuentaB.historialTransacciones);
console.log('*****Historial Depósitos****');
console.log(cuentaB.getHistorialDepositos());
console.log('*****Historial Retiros****');
console.log(cuentaB.getHistorialRetiros());

