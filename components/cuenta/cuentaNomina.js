import { cuenta } from "./cuenta.js";

export class cuentaNomina extends cuenta {
    retiro(valor) {
        super.retiro(valor, 4);
    }
}