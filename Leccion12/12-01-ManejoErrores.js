"use strict"

/*
x = 10
// cuando hay un error el codigo se frena y
// no ejecuta las lineas siguientes 
console.log("continuamos...") 
*/
/*
// Ahora veamos este caso pero con try and catch
try {
    let x=10
    //miFunction()
    throw 'Mi error';
}
catch (error) { // Capturando el error
    console.log(error);
}
finally { // este cacho de codigo siempre se va a utilizar
    console.log("Final de la revision de errores")
}
// Al usar try and catch capturamos el erro y de 
// esa manera las lineas siguientes de codigo se 
// siguen utilizando 
console.log("continuamos con el codigo")
*/

let resultado = 'Tres'
// let resultado= ''

try {
    if(isNaN(resultado)) throw 'No es un número';
    else if(resultado === '') throw 'Es una cadena vacía';
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado <= 0) throw 'Valor negativo';
} 
catch (error) {
    console.log(error)
    console.log(error.name);
    console.log(error.message);
} 
finally {
    console.log("Final de la revision de errores");
}

