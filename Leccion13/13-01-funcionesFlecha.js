// Funciones flecha 
function miFunction(){
    console.log('ejecutando la funcion');
}
miFunction();

// En concepto de Hoisting no aplica para las funciones flecha 
// porque en realidad es por el concepto de let
const miFunctionFlecha = ()=>{
    console.log('ejecutando la funcion flecha');
}
miFunctionFlecha();

// Simplificando la funcion flecha, tiene el return implicito 
const functionFlechaSimplificar = () => console.log('ejecutando la funcion simplificada');
functionFlechaSimplificar();

const saludoDelDia = () => {
    return 'Saludos del dia ...'
}
console.log(saludoDelDia());

const saludoDelDia2 = () => 'Saludos del dia simplificada ...';
console.log(saludoDelDia2());

// En objetos ahora, si trabajamos con los mismos 
// si esa una linea agregar los parentesis para 
// luego agregar las llaves de los obejtos
const regresaObjeto = () =>({nombre:'Luis', poder: 100000})
console.log(regresaObjeto());

// Funcion flecha con parametros 
const funcionConParametros = (message) => console.log(message);
funcionConParametros('Saludos con parametros')

const funcionConParametros2 = (a,b) =>  a + b; 
console.log(funcionConParametros2(2,3))

// Aun mas simplificada en una linea 
const conParametrosSimplificada = mensaje => console.log(mensaje);
conParametrosSimplificada('Mensaje con parametros sin parentesis');


