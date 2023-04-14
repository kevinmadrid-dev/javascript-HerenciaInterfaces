export class cuenta {
  #cliente;
  #saldoCuenta;

  constructor(cliente, agenciaCuenta, numeroCuenta, saldoCuenta) {
    if (this.constructor == cuenta) {
      throw new Error("No se debe instanciar objetos de la clase cuenta");
    }

    this.#cliente = cliente;
    this.agenciaCuenta = agenciaCuenta;
    this.numeroCuenta = numeroCuenta;
    this.#saldoCuenta = saldoCuenta;
  }

  set cliente(valor) {
    if (valor instanceof clienteBanco) {
      this.#cliente = valor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  deposito(valor) {
    if (valor > 0) {
      this.#saldoCuenta += valor;
    }
    return this.#saldoCuenta;
  }

  retiro(valor, comision) {
    valor = valor * (1 + comision / 100);

    if (valor <= this.#saldoCuenta) {
      this.#saldoCuenta -= valor;
    }
    return this.#saldoCuenta;
  }

  tranferencia(valor, cuentaDestino) {
    this.retiro(valor);
    cuentaDestino.deposito(valor);

    return this.#saldoCuenta;
  }

  verSaldo() {
    return this.#saldoCuenta;
  }

  prueba() {
    console.log("Método Padre");
  }
}
