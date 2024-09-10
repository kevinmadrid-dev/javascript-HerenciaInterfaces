export class empleado {
  #nombreEmpleado;
  #dniEmpleado;
  #clave;
  #salarioEmpleado;

  constructor(nombreEmpleado, dniEmpleado, clave, salarioEmpleado) {
    this.#nombreEmpleado = nombreEmpleado;
    this.#dniEmpleado = dniEmpleado;
    this.#clave = clave;
    this.#salarioEmpleado = salarioEmpleado;
  }

  autenticable(clave) {
    return clave == this.#clave;
  }

  bonificacion(bonoEmpleado) {
    return this.#salarioEmpleado + this.#salarioEmpleado * (bonoEmpleado / 100);
  }
}
