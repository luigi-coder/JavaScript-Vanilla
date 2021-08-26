class Producto {

    static contadorProducto = 0;

    constructor(nombre,precio) {
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }
    get getIdProducto() {
        return this.idProducto;
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getPrecio() {
        return this.precio;
    }
    set setPrecio(precio){
        this.precio = precio;
    }
    toString(){
        return `IdProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`
    }
}

class Orden {
    
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrdenes = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get getIdOrdenes(){
        return this._idOrdenes;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else {
            console.log("No se pueden agregar mas productos");
        }
    }
    
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto._precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '}';
        }
        console.log(`Orden: ${this._idOrdenes}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa',100)
// Relacion de agregacion 
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Campera',500);
orden2.agregarProducto(producto3)
orden2.agregarProducto(producto1)
orden2.agregarProducto(producto2)
orden2.mostrarOrden()






