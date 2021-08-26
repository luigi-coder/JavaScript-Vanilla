// Arreglo - Es un tipo object
// let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');
const AUTOS = ['BMW', 'Mercedes Benz', 'Volvo'];

for (let i = 0; i < AUTOS.length; i++) {
    const element = AUTOS[i];   
    console.log(element)
}

// Modificar elementos del array
AUTOS[1] = 'Lamborgini';
console.log(AUTOS);

// Agregar Elementos al array 
AUTOS.push('Toyota');
console.log(AUTOS);

// Cantidad de elementos del array 
console.log(AUTOS.length);

// Preguntar Si estamos trabajando con un arreglo 
// Preguntamos si es un arreglo
console.log(Array.isArray(AUTOS))
// Preguntamos si es una instancia de un arreglo
console.log(AUTOS instanceof Array)

   