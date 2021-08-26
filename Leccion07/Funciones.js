/*
// Funciones 
function miFunction(a,b){
    console.log(arguments.length)
    return a + b;
}
const funcion = miFunction(8,9);
console.log(funcion);

// Funciones de tipo expresion o anonimas 
let sum = function(a,b){
    return a + b
};
let resultado = sum(1,3);
console.log(resultado);

// Funciones Tipo Self Invoking( a si misma )
(function(a,b){
    console.log("Sumando " + (a + b))
})(3,5);

// Impresion de la funcion en texto
const miFunctionTexto = miFunction.toString();
console.log(miFunctionTexto)

// Funciones de tipo flecha 
const multiplicacion = (a,b)=> a * b;

console.log(multiplicacion(6,5))

// Parametros y Argumentos 
const sumar = function (a,b){
    console.log(arguments[0])
    console.log(arguments[1])
    return  a + b;
}
console.log(sumar(8,9))
*/

// Ejemplo Sumar Argumentos 
let resultado = sumarTodo(5,4,13,10,9);
console.log(resultado)

function sumarTodo(){

    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma
}

// Paso por valor en funciones 
let x = 10;

function cambiarValor(a){

    a = 20;
    return;
}

cambiarValor(x);
console.log(x);

// Paso por referencia 
const objeto = {
    nombre: "Luis",
    apellido: "Salinas",
    edad: 29
}
function cambiarValorObjeto(p1){
    p1.nombre = "Emma";
    p1.apellido = "17";
    p1.edad = 3
}
// PPR
cambiarValorObjeto(objeto);
console.log(objeto);

