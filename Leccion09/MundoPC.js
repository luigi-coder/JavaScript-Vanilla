class DispositivoEntrada {

    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get getTipoEntradas(){
        return this._tipoEntradas;
    }
    set setTipoEntradas(tipoEntrada){
        this._tipoEntradas = tipoEntrada;
    }
    get getMarca(){
        return this._marca;
    }
    set setMarca(marca){
        return this._marca = marca;
    }

}
class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get getIdRaton(){
        return this._idRaton;
    }
    toString(){
        return `RATON: [ IdRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} ]`;
    }
}
class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get getIdTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `TECLADO: [ IdTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca} ]`;
    }
}

class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get getIdMonitor(){
        return this._idMonitor;
    }
    get getMarca(){
        return this._marca;
    }
    set setMarca(marca) {
        this._marca = marca;
    }
    get getTamanio(){
        return this._tamanio;
    }
    set setTamanio(tamanio) {
        this._tamanio = tamanio;
    }
    toString(){
        return `MONITOR: [ IdMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanio} ]`
    }
}

class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = new Monitor("HP",15);
        this._teclado = new Teclado("BLUETOOTH","Samsung");
        this._raton = new Raton("USB","HP");
    }
    get getIdComputadora(){
        return this._idComputadora;
    }
    set getIdComputadora(idComputadora){
        this._idComputadora = idComputadora;
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    get getMonitor(){
        return this._monitor;
    }
    set setMonitor(monitor){
        this._monitor = monitor;
    }
    get getTeclado(){
        return this._teclado;
    }
    set setTeclado(teclado){
        this._teclado = teclado;
    }
    get getIdRaton(){
        return this._raton;
    }
    set setRaton(raton){
        this._raton = raton;
    }
    toString(){
        return `Computadora 1:\n    IdComputadora: ${this._idComputadora}\n    Nombre: ${this._nombre}\n       ${this._monitor}\n       ${this._teclado}\n       ${this._raton}`
    }
}

class Orden{

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrdenes(){
        return this._idOrden;
    }
    agregarComputadoras(producto){
        this._computadoras.push(producto);
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._computadoras){
            productosOrden += '\n{' +producto.toString() + '}'
        }
        console.log(`Orden ${this._idOrden}: ${productosOrden}`)
    }
}


let raton1 = new Raton('USB','HP');
console.log(raton1.toString());
let raton2 = new Raton('BLUETOOTH','DELL');
console.log(raton2.toString());

let teclado1 = new Teclado('USB','APPLE');
console.log(teclado1.toString());

let monitor1 = new Monitor('SAMSUNG', 15);
console.log(monitor1.toString());

let computadora1 = new Computadora('Computadora Gamer')
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadoras(computadora1);
orden1.mostrarOrden()