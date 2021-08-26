/*
// Sentencia de control if/else
let condicion = true;

if(condicion){
    console.log("Verdadero");
}else {
    console.log("Falso");
}
// Ejemplo if/else
let numero = 3;

if(numero == 1){
    console.log("Numero uno");
}else if(numero == 2){
    console.log("Numero dos");
}else if(numero == 3){
    console.log("Numero tres");
}else if(numero == 4) {
    console.log("Numero cuatro");
}else {
    console.log("Numero desconocido");
}

// Ejercicio de Estacion del Año
let mes = 4;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Verano";
}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Otoño";
}else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Invierno";
}else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "Primavera";
}else {
    estacion = "Estacion no valida";
}

console.log(estacion)

// Ejercicio Calculo hora del dia
let hora = 19;
let mensaje;

if(6 <= hora && hora <= 11){
    mensaje = "Buenos dias";
}else if(12 <= hora && hora <=18){
    mensaje = "Buenas tardes";
}else if(19 <= hora && hora <=24){
    mensaje = "Buenas noches";
}else if(0 <= hora && hora <= 6){
    mensaje = "Durmiendo";
}else {
    mensaje = "Hora no valida"
}

console.log(mensaje)
*/
/*
// Sentencia Switch 
let numero = 3;
let numeroTexto = "Valor desconocido";

switch(numero){
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3:
        numeroTexto = 'Numero tres';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
}

console.log(numeroTexto)
*/

// Ejercicio Calculo Estacion del Año con switch
let mes = 4;
let estacion = 'Estacion desconocida';

switch(mes){
    case 1: case 2: case 12:
        estacion = 'Verano';
        break;
    case 3: case 4: case 5:
        estacion = 'Otoño';
        break;
    case 6: case 7: case 8:
        estacion = 'Invierno';
        break;
    case 9: case 10: case 11:
        estacion = 'Primavera'; 
    default: 
    estacion = 'Valor incorrecto';
}
console.log(estacion)


   














