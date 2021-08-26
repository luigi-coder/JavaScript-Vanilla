class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(fechaRegistro) {
        this._idCliente = Cliente.contadorClientes;
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
        return `${this.toString()} 
                ${this._idCliente} 
                ${this._fechaRegistro}`;
    }
}