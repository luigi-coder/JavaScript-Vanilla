// EJERCICIO DE HERENCIA 
class Persona {

    static contadorPersonas = 0;

    constructor(nombre,apellido,edad){
        this.idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get getIdPerson(){
        return this._idPersona;
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre) { 
        this._nombre = nombre;
    }
    get getApellido(){
        return this._apellido;
    }
    set setApellido(apellido) { 
        this._apellido = apellido;
    }
    get getEdad(){
        return this._edad;
    }
    set setEdad(edad) { 
        this._edad = edad;
    }
    toString(){
        return `${this.idPersona} ${this._nombre} ${this._apellido} ${this._edad}`
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get getIdEmpleado(){
        return this._idEmpleado;
    }
    get getSueldo(){
        return this._sueldo;
    }
    set setSueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fechaRegistro) {
        super(nombre,apellido,edad)
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get getIdCliente(){
        return this._idCliente;
    }
    get getFechaRegistro(){
        return this._fechaRegistro
    }
    set setFechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

// Prueba de la clase Persona 
let persona1 = new Persona('Juan','Perez',28);
console.log(persona1.toString());
let persona2 = new Persona('Carlos','Ramirez',35);
console.log(persona2.toString());

let empleado1 = new Empleado('karla','Gomez',25,5000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Laura','Quintero',33,7000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Miguel','Cervantes',30, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente('Maria','Lara',38, new Date());
console.log(cliente2.toString());