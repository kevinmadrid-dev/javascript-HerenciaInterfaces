import { cuenta } from "./cuenta.js";

export class cuentaAhorro extends cuenta {
  constructor(cliente, agenciaCuenta, numeroCuenta, saldo) {
    super(cliente, agenciaCuenta, numeroCuenta, saldo);
  }

  retiro(valor) {
    super.retiro(valor, 5);
  }
}
