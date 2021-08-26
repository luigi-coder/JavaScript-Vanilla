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
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`
    }
}

