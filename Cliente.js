export class cliente {
    nombreCliente;
    dniCliente;
    #clave;
    
    constructor(nombreCliente, dniCliente, clave) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.#clave = clave;
    }

    autenticable() {
        return true;
    }
}