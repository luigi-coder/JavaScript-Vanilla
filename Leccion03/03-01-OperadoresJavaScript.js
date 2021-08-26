/*
// Operadores Aritmeticos
let a = 3, b = 2;
// Suma 
let suma = a+b;
console.log(`Suma = ${suma}`);
// Resta
let resta = a-b;
console.log(`Resta = ${resta}`);
// Multiplicacion
let multiplicacion = a*b;
console.log(`Multiplicacion = ${multiplicacion}`);
// Exponenciacion
let exponente = a**b;
console.log(`Exponente = ${exponente}`);
// Division 
let division = a/b;
console.log(`Division = ${division}`);
// Modulo
let modulo = a%b;
console.log(`Modulo = ${modulo}`);
// Incremento
// Pre-incremento
z = ++a
console.log(a)
console.log(`Pre-Incremento = ${z}`)
// Post-incremento
z = b++
console.log(b)
console.log(`Post-incremento = ${z}`)

// Decremento
// Pre-decremento
z = --a
console.log(a)
console.log(`Pre-Incremento = ${z}`)
// Post-decremento
z = b--
console.log(b)
console.log(`Post-incremento = ${z}`)
*/
/*
// Precedencia de Operadores en JavaScript
let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log(z)

z = c + a * b / d;
console.log(z)

z = (c + a) * b / c;
console.log(z)
*/

// Operadores de Asignacion 
/*
let a = 1;
a += 5
console.log(a)
a -= 1
console.log(a)
a *= 3
console.log(a)
a /= 3
console.log(a)
a %= 3
console.log(a)
a **= 3
console.log(a)
*/

// Operadores de comparacion 
// Igual a
/* let a = 3, b = 2, c = "3";

let z = a == b; // revisa el valor si importar el tipo 
console.log(z)

z = a == c;
console.log(z)

z = a === c; // revisa los valores pero tambien los tipos
console.log(z) 

// Distinto a 
z = a != b; 
console.log(z)

z = a != c;
console.log(z)

z = a !== c; 
console.log(z)

// Operadores relacionales

z = a < b; 
console.log(z)

z = a <= c;
console.log(z)

z = a > c; 
console.log(z)

z = a >= c; 
console.log(z)
*/
/*
// Ejercicio es Numero par o impar

let numero = 5;

if(numero % 2 == 0){
    console.log("numero par");
}else {
    console.log("numero impar");
}

// Ejercicio es mayor de edad
let edad = 20;
let mayorEdad = 18;

if(edad >= mayorEdad){
    console.log("Mayor de edad");
}else {
    console.log("Menor de edad");
}

// Operadores Logicos
// and (&&)
let a = 5;
let max = 10;
let min = 0;

if(a >= min && a <= max){
    console.log("Dentro de rango");
}else {
    console.log("Fuera de rango");
}

// or (||)
let vacaciones = false, diaDescanso = false;

if(vacaciones || diaDescanso){
    console.log("Puede asistir")
}else {
    console.log("No puede asistir");
}

// Operador ternario en JavaScript
// Condicion ? Expr1 : Expr2
let resultado = (3 > 2) ? "verdadero":"falso";
console.log(resultado) 

let numero = 9;
resultado = (numero % 2 == 0)? "numero par":"Numero impar";
console.log(resultado) */

/*
// Convertir cadenas a numeros
let number = "101";
console.log(number);
console.log(typeof number);

let edad = Number(number);
console.log(edad)
console.log(typeof edad)

let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(resultado)

// Funcion isNaN
let number2 = "20x";

let edad2 = Number(number2);
console.log(edad2)

if(isNaN(edad2)){
    console.log("No es un numero")
}
else {
    if(edad2 >= 18){
        console.log("Puede Votar este pibe");
    } else {
        console.log("Muy joven para votar");
    }
}
*/

/* // Precedencia de operadores con javascript
let x = 5, y = 10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

let resultado = 4 + 5 * 6 / 3;
console.log(resultado)
// Modificando la presedencia 
resultado = (4+5) * 6 / 3
console.log(resultado) */

// Sentencia de control if/else 
  




