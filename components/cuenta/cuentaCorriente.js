import { cuenta } from "./cuenta.js";

export class cuentaCorriente extends cuenta {
  static cantidadCuenta = 0;

  constructor(cliente, agenciaCuenta, numeroCuenta) {
    super(cliente, agenciaCuenta, numeroCuenta, 0);
    cuentaCorriente.cantidadCuenta++;
  }

  retiro(valor) {
    super.retiro(valor, 2);
  }
}
