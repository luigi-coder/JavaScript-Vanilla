/* // Clases 
class Persona {

    // Atributo de nuestra clase
    static contadorObjetosPersona = 0; // Atributo static
    // Atributo de nuestro objeto
    email = 'Valor default email'; // Atributo no static
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa contador: " + Persona.contadorObjetosPersona)
    }
    // Get y Set 
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    get getApellido(){
        return this._apellido;
    }
    set setApellido (apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return `${this._nombre} ${this._apellido}`
    }
    // Reescribiendo el metodo toString de Object 
    toString(){
        // Se aplica polimorfirmo (multiples formas en tiempo de ejecucion)
        // El metodo que se ejecuta depende si es una referencia de tipo
        // padre o de tipo hijo.
        return this.nombreCompleto();
    }
    // Metodo static, este metodo se asocia con la clase, pero 
    // pero no con los objetos 
    static saludar(){
        console.log("Saludos metodo static");
    }
    static saludar2(persona){
        console.log(persona._nombre);
    }
}
// Herencia 
class Empleado extends Persona {
    constructor(nombre,apellido,departamento) {
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get getDepartamento(){
        return this._departamento;
    }
    set setDepartamento(departamento){
        this._departamento = departamento;
    }
    // Sobreescritura 
    nombreCompleto(){
        // super.nombreCompleto() llamamos a nombre y apellido
        return `${super.nombreCompleto()} ${this._departamento}`
    }
}
// En clase hija heredo los get, set y metodos 
let persona1 = new Persona("Capitan", "Del Espacio");
console.log(persona1);

let empleado1 = new Empleado("Luis","Salinas", "Administracion");
console.log(empleado1)
console.log(empleado1.nombreCompleto());

// Clase Object Metodo toString Sobreescritura y Polimorfismo
console.log(empleado1.toString())
// persona1.saludar(); NO es posible llamar un metodo static 
// desde un objeto
Persona.saludar(); // Los metodos estaticos solo los podemos llamar
// desde la clase utilizando el tipo de la clase y no desde el Objeto
Persona.saludar2(persona1);
Empleado.saludar();
Empleado.saludar2(empleado1);
// Utilizando la variable static, usamos la clase, no el objeto
console.log(Persona.contadorObjetosPersona);
// La clase hija tambien hereda esta variable
console.log(Empleado.contadorObjetosPersona);
// accedemos desde el objeto
console.log(persona1.email)
console.log(empleado1.email)
console.log(Persona.email)// No se puede acceder desde la clase */

// EJEMPLO DE USO DE LA PALABRA STATIC 
/*class Persona {
    
    static contadorPersonas = 0; 
    
    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }else{
            console.log("El numero maximo de objetos a sido superado");
        }
    }
    // Get y Set 
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    get getApellido(){
        return this._apellido;
    }
    set setApellido (apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return `${this.idPersona} ${this._nombre} ${this._apellido}`
    }
    
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos metodo static");
    }
    static saludar2(persona){
        console.log(persona._nombre);
    }
}

class Empleado extends Persona {
    constructor(nombre,apellido,departamento) {
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get getDepartamento(){
        return this._departamento;
    }
    set setDepartamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return `${super.nombreCompleto()} ${this._departamento}`
    }
}

let persona1 = new Persona("Capitan", "Del Espacio");
console.log(persona1.toString());

let empleado1 = new Empleado("Emma","Invernizzi", "Administracion");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona("Carla", "Ramirez");
console.log(persona2.toString());

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ); // El valor no cambio por que el metodo 
// static que definimos es get solo de lectura.

let persona3 = new Persona("Andy","Invernizzi");
let persona4 = new Persona("Armando", "Maradona");
let persona5 = new Persona("Alex","Ubago");
console.log(persona4.toString()); */

