function miFunction1(){
    console.log("miFunction1");
}

function miFunction2(){
    console.log("miFunction2");
}
// Se ejecutan de maneral secuencial las funciones 
miFunction1();
miFunction2();

// Ahora veamos el concepto de funciones  de tipo Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionesCallback){

    let resultado = op1 + op2
    funcionesCallback(`suma: ${resultado}`) 

}
sumar(2,3,imprimir) // no tenemos que poner parentesis en la funcion

// Llamas asíncronas con uso de SETIMEOUT
function funcionesCallback(){
    console.log('Saludo asíncrono después de 3 seg');
}
// Esto quiere decir que el flujo de trabajo ya no es 
// como lo vimos en un principio que era secuencial 
setTimeout(funcionesCallback, 3000);
setTimeout(function(){console.log('Saludo asíncrono después 1 seg')}, 1000);
setTimeout(()=>{console.log('Saludo asíncrono después 10 seg')}, 10000);

// Funcion SETINTERVAL 
// Llama a una funcion cada cierto tiempo 

let reloj = ()=>{

    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}
reloj()

//setInterval(reloj,1000);

