class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(sueldo){

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
        return `${this.toString()} 
                ${this._idEmpleado} 
                ${this._sueldo}`;
    }
}

