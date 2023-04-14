import { cliente } from "./components/cliente.js";
import { cuentaAhorro } from "./components/cuenta/cuentaAhorro.js";
import { cuentaCorriente } from "./components/cuenta/cuentaCorriente.js";
import { cuentaNomina } from "./components/cuenta/cuentaNomina.js";
import { empleado } from "./components/empleado/empleado.js";
import { empleadoDirector } from "./components/empleado/empleadoDirector.js";
import { empleadoGerente } from "./components/empleado/empleadoGerente.js";
import { autenticacion } from "./components/autenticacion.js";

//Instanciamos un cliente y cuenta 1
const cliente1 = new cliente("Jesús Romero", "12345678", "987654");
const cuenta1 = new cuentaAhorro(cliente1, "BBVA", "01", 0);

console.log(autenticacion.login(cliente1, "987654"));

//Instanciamos un cliente y cuenta 2
const cliente2 = new cliente("María Arévalo", "87654321");
const cuenta2 = new cuentaCorriente(cliente2, "BCP", "02");

//Instanciamos un cliente y cuenta 3
const cliente3 = new cliente("María Arévalo", "87654321");
const cuenta3 = new cuentaNomina(cliente3, "BN", "03");

//Instanciamos los empleados
const empleado1 = new empleado("Nicolas Ruiz", "16264203", "123456", 100);
const empleado2 = new empleadoGerente("Luis Román", "05236942", "012345", 150);
const empleado3 = new empleadoDirector("Oscar Calvez", "03659462", "654321", 200);

console.log(autenticacion.login(empleado1, "123456"));
console.log(autenticacion.login(empleado2, "123456"));
console.log(autenticacion.login(empleado3, "654321"));