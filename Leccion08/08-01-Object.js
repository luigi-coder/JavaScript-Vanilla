/* // Objetos 
let person = {
    name: "Capi",
    surname: "Tan",
    email: "Capitan@delespacio.com",
    edad: 2,
    // Agregando un metodo a un objeto
    nombreCompleto: function(){
        // This - Contexto 
        return this.name + ' ' + this.surname
    }
}
console.log(person);
console.log(person.name);
console.log(person.nombreCompleto());

// Creacion de un Objeto con la palabra new
let person2 = new Object();
person2.name = 'Emma';
person2.surname = '17';
person2.email = 'emma17@perita.com';
person2.edad = 3;
console.log(person2);
console.log(person2.name);

// Acceder a las propiedades de Objetos 
console.log(person2.name);
console.log(person2['name']);

// for in para recorrer Objetos
for(propiedad in person2){
    console.log(propiedad)
    console.log(person2[propiedad])
}*/
/*
// Agregar y elimiar nuevas propiedades a un Objeto
let person = {
    name: "Capi",
    surname: "Tan",
    email: "Capitan@delespacio.com",
    edad: 2,
    // Agregando un metodo a un objeto
    nombreCompleto: function(){
        // This - Contexto 
        return this.name + ' ' + this.surname
    }
}
// Agregando propiedades
person.telefono = 1530990849;
console.log(person);
// Eliminando propiedades
delete person.telefono;
console.log(person)

// Distintas formas de imprimir un Objeto
// Concantenar cada valor de cada propiedad
console.log(`
    ${person.name}
    ${person.surname}
    ${person.email}
    ${person.edad}
`)
// For in 
for(datos in person){
    console.log(person[datos]);
}

// Object.values
let personArray = Object.values(person);
console.log(personArray);

let personString = JSON.stringify(person);
console.log(personString);

// Metodos get y set en Objetos
let person = {
    name: "Capi",
    surname: "Tan",
    email: "Capitan@delespacio.com",
    edad: 2,
    idioma: 'es',
    get lenguaje(){

        return this.idioma.toUpperCase();
    },
    // Agregando metodo set
    set lenguaje(lenguaje){
        this.idioma = lenguaje.toUpperCase();
    },
    // Agregando un metodo get
    get nombreCompleto(){
        // This - Contexto 
        return this.name + ' ' + this.surname
    }
}
console.log(person.nombreCompleto);
console.log(person.lenguaje);
person.lenguaje = "en";
console.log(person.lenguaje);
console.log(person.idioma);
*/
/*
// Metodo constructor 
// Funcion constructor dobjeto de tipo Persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`;
    }
}
// Creacion de objetos reutilizando codigo
let persona1 = new Persona(
    'Luis','Salinas','luigicode28@gmail.com'
);
console.log(persona1.nombreCompleto())
let persona2 = new Persona(
    'Nayely','Salinas','nay21@gmail.com'
);
console.log(persona2.nombreCompleto())

// Varias formas de crear objetos 
let miObjeto = new Object();
let miObjeto2 = {};

// Funcion constructora del metodo String 
let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

// Funcion constructora del metodo Number
let numero = new Number(1);
let numero2 = 1;

// Funcion constructora del metodo Boolen
let miBoolean = new Boolean(false);
let miBoolean2 = false;

// Funcion constructora del metodo Arreglo
let miArreglo1 = new Array();
let miArreglo2 = [];

// Funcion constructora del metodo Function
let miFuncion1 = new Function();
let miFuncion2 = function(){};
*/
/*
// USO DE PROTOTYPE 
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return `${this.nombre} ${this.apellido}`;
    }
}
// uso prototype
Persona.prototype.telefono = "1530990899";

let persona1 = new Persona(
    'Luis','Salinas','luigicode28@gmail.com'
);
persona1.telefono = 11223344
console.log(persona1.telefono)
let persona2 = new Persona(
    'Nayely','Salinas','nay21@gmail.com'
);
persona2.telefono = 55667788
console.log(persona2.telefono)
*/
/*
// USO DE CALL
let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    // Paso de argumentos en call 
    nombreCompleto: function(titulo, telefono){
        return `${titulo}: ${this.nombre} ${this.apellido} ${telefono} `
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

// Uso de call para usar el metodo persona1.nombreCompleto
// con los datos del persona2
console.log(persona1.nombreCompleto('Doctor','40506070'));
console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero','10203040'));
*/


