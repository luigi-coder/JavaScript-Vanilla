// PROMESAS
/*
let miPromise = new Promise((resolve, reject) => {

    let expresion = true;

    if(expresion) {
        resolve('Resuelto'); // Resuelto hace de valor
    }else {
        reject('Rechazado') // Rechazado hace de valor
    }
})
// recodar son dos argumentos
// miPromise.then(valor => console.log(valor),error => console.log(error));
// La parte then ejecuta resolve y catch ejecuta reject
// miPromise.then(valor => console.log(valor)).catch(error => console.log(error));

*/
/*
let promesa = new Promise((resolve, reject) =>{

    let variable = "Luis";

    if(variable !== Number) {
        resolve("La variable es correcta");
    }else {
        reject("La variable es incorrecta")
    }
})

// promesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error))
*/

// FUNCION SETTIMEOUT Y PROMESAS EN JAVASCRIPT
// No es obligatorio manejar los dos parametros 
// sobre todo la parte de reject
/*
let promise  = new Promise((resolve) =>{

    console.log('Inicio Promesa');
    setTimeout(() => {
        resolve('Saludos con promesa y timeout'); // Todo este codigo de punta a punta es asincrono 
    },3000);
    console.log('Fin de la promesa')
})

promise.then(valor => console.log(valor))
*/
/*
// PALBRAS ASYNC 
let promesa  = new Promise((resolve) =>{

    setTimeout(()=>{
        resolve('Saludos con promesa y timeout');
    }, 3000)
}) // Este codigo no tiene nada que ver con el funcionamiento 
// de la funcion Async de abajo, solo es modo de darnos 
// cuenta de que funcionan de la misma manera 

// Async significa que una funcion va a regresar una promesa
// Cuando creeemos una funcion con la palabra async por delante 
// significa que esa funcion devolvera una promesa
async function funcionConPromesa(){
    return 'Saludos con promesa y async';
}
funcionConPromesa().then(valor => console.log(valor));

async function sumar(a,b){

    return a + b;
}
sumar(4,5).then(valor => console.log(valor));
*/
/*
// ASYNC Y AWAIT 
// El conjunto de las mismas facilitan el uso de las
// promesas await va a esperar el resultado de una 
// promesa 

async function funcionAsyncAwaii(){

    let promesa = new Promise((resolve)=>{
        resolve('Promesa con await');
    });
    // consumiendo la respuesta de la promesa 
    // Ya no es necesario la palabra then, await 
    // ahora se encarga de resivir el valor 
    console.log(await promesa)
}

funcionAsyncAwaii()
*/

// PROMESAS CON ASYNC, AWAIT Y SETTIMEOUT

async function funcionPromesaAwaitTimeout(){
    console.log('Inicio de la funcion');
    let promesa = new Promise((resolve)=>{
        setTimeout(()=> {
            resolve('promesa con await y timeout');
        }, 3000)
    });
    // Procesando la promesa, aca paso algo curioso, a difrencia 
    // de los ejercicios anteriores de promesas, el console log 
    // de inicio de la funcion se ejecuta y luego se ejecuta el 
    // console log de promesas con await y timeout, y luego el 
    // console log de Fin de la funcion, porque pasa esto ? porque 
    // esta presente la palabra await, que espera una promesa,
    // entonces el ultimo console log no se va a ejecutar hasta que 
    // se ejecute la promesa 
    console.log(await promesa);
    console.log('Fin de la funcion');
}
funcionPromesaAwaitTimeout();

