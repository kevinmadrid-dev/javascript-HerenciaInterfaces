import { empleado } from "./empleado.js";

export class empleadoDirector extends empleado {
    constructor(nombreEmpleado, dniEmpleado, salarioEmpleado) {
        super(nombreEmpleado, dniEmpleado, salarioEmpleado);
    }

    bonificacion() {
        let bonoEmpleado = 10;

        return super.bonificacion(bonoEmpleado);
    }
}