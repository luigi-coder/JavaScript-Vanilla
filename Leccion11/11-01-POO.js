// Concepto de sobreescritura
class Empleado {

    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`
    }
}

class Gerente extends Empleado{

    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this.departamento}`
    }
}

// Polimorfismo una linea de codigo puede ejecutar 
// el metodo de la clase padre o de la clase hija 
// ya que polimorfirmo significa multiples formas 

// Esto es un metodo independiente
function determinarElTipo(tipo){    

    // Cuando usamos instanceof siempre debemos usar 
    // Primero la clase de mejor jerarquia ver en la 
    // linea 40 hasta 54
     // Polimorfismo
    console.log(tipo.obtenerDetalles());
    // Lo interesante de usar instanceof es que dependiendo del
    // tipo de objeto que hallamos creado podemos o no usar las 
    // propiedades en el caso de cada tipo
    if(tipo instanceof Gerente){
        // Por ejemplo en este caso puedo hacer uso de nombre, 
        // sueldo y sistemas 
        console.log("Este objeto es de tipo gerente");
        console.log(tipo.nombre)
        console.log(tipo.sueldo)
        console.log(tipo.departamento)
       
    }else if(tipo instanceof Empleado){

        console.log("Este objeto es de tipo empleado");
        console.log(tipo.nombre);
        console.log(tipo.sueldo);

    }else if(tipo instanceof Object){

        console.log("Este objeto es de tipo Object");

    }
}

let empleado1 = new Empleado("Juan",30000);
console.log(empleado1)
let gerente1 = new Gerente("Luis",20000,"sistemas");
console.log(gerente1)

determinarElTipo(empleado1); // Imprime el metodo del padre
determinarElTipo(gerente1); // Imprime el metodo del hijo

