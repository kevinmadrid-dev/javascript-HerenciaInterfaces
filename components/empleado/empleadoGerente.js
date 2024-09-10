import { empleado } from "./empleado.js";

export class empleadoGerente extends empleado {
  constructor(nombreEmpleado, dniEmpleado, salarioEmpleado) {
    super(nombreEmpleado, dniEmpleado, salarioEmpleado);
  }

  bonificacion() {
    let bonoEmpleado = 5;

    return super.bonificacion(bonoEmpleado);
  }
}
