/* primer capitulo 
console.log('Funcionando');
// Cuando agregamos en innerHTML accedemos al valor dentro
// del objeto h1 innerHTML
let cabecero = document.getElementById('cabecero');
console.log(cabecero.innerHTML);
let parrafo = document.getElementById('parrafo');
console.log(parrafo.innerHTML);
// Con innerHTML no solo podemos leer el contenido sino 
// tambien podemos modificarlo 
parrafo.innerHTML = 'Nuevo valor del parrafo';
cabecero.innerHTML = 'Cambio de cabecero';
*/
/* segundo capitulo
// METODO GETELEMENTBYTAGNAME - con esto buscamos 
// todos los elementos de tipo parrafo y nos devuelve 
// un arreglos de todos los elementos de tipo parrafo
let parrafos = document.getElementsByTagName('p');
console.log(`Cantidad de parrafos: ${parrafos.length}`
for (let i = 0; i < parrafos.length; i++) {
    // accediendo a los elementos del array y a los valores
    console.log(`indice: ${i} ${parrafos[i].innerHTML}`)
}
*/
/* Tercer capitulo
METODO GETELEMENTBYCLASSNAME
         
let elementos = document.getElementsByClassName('azul');
console.log(elementos) // devuelve un array
console.log(`Cantidad de elementos: ${elementos.length}`)
for (let i = 0; i < elementos.length; i++) {
            
    console.log(`Indice: ${i} ${elementos[i].innerHTML}`);
}
for (const elemento of elementos) {

    console.log(elemento.innerHTML);
}
*/
    /* Cuarto capitulo
// METODO QUERYSELECTORALL
let elementos = document.querySelectorAll('.azul');
console.log(`Cantidad de elementos: ${elementos.length}`)
        
for (const elemento of elementos) {

    console.log(elemento.innerHTML);
}
*/

// FORMULARIOS CON JAVASCRIPT
/*
function mostrarValores(){

    // let formulario document.forms['formulario'];
    // let texto = '';
    
    // let nombre = formulario['nombre'];
    // let apellido = formulario['apellido'];

    // texto = nombre.value + '<br/> ' + apellido.value;
    // document.getElementById('valores').innerHTML = texto 

    let formulario = document.forms['formulario'];
    let texto = '';

    for (const elemento of formulario) {
        // accediendo al valor y concatenandola 
        // con la variable texto
        texto += elemento.value + '\n';
    }
    
    let textoMostrado = document.getElementById('valores').innerHTML = texto
    //localStorage.setItem("valores", textoMostrado)
}*/
/* // cambiando el contenido del DOM 
function mostrar(){
    // Esto si queremos cambiar el texto 
    //document.getElementById('titulo').innerHTML = "Nuevo Titulo";
    // Pero si queremos sumar el nuevo titulo al anterior
    document.getElementById('titulo').innerHTML += " Nuevo Titulo";
}  */

// CAMBIO DEL VALOR DE LOS ATRIBUTOS EN EL DOM
/* function mostrar(){
    
    document.getElementById('imagen')
    .src = "http://globalmentoring.com.mx/imagenes/html5.png"
} */

// MODIFICAR LOS ESTILOS DEL CSS DESDE JAVASCRIPT
/*document.getElementById('titulo').style.color='Blue';
function mostrar(){

    document.getElementById('titulo').style.color='red';
}*/

// MANJEJO DE EVENTOS CON EL DOM
// el parametro titulo apunta la h1 
/* function cambiarTexto(titulo){

    console.log(titulo);
    console.log(titulo.innerHTML);
    titulo.innerHTML = 'Cambiando el titulo'
    console.log(titulo.innerHTML);

} */

// ASOCIAR EVENTOS DESDE JAVASCRIPT onclick

/* document.getElementById('titulo').onclick = cambiarTexto;

function cambiarTexto(){

    document.getElementById('mostrar').innerHTML = 'Nuevo Contenido';
    document.getElementById('mostrar').style.backgroundColor = 'green';

} */

// ASOCIAR EVENTOS DESDE JAVASCRIPT onload
// El mismo se ejecuta cuando nuestra web se carga 

/* function entrar(){

    alert('Entrando a la pagina web');
    // ver si estan habilitadas las cookies
    let texto = '';

    if(navigator.cookieEnabled){
        texto = 'Cookie estan habilitadas';
    }else{
        texto = 'Cookies estan deshabilitadas';
    }
    document.getElementById('mostrar').innerHTML = texto;
} */

// ASOCIAR EVENTOS DESDE JAVASCRIPT onchange
    // Este codigo hiria dentro de la funcion
    //let nombre = document.getElementById('nombre');
    // nos podemos ahorra todo este codgio anterior 
    // usando la palabra this como parametro de la
    // funcion en el html y JS, con el nombre de nombreInput
    // por ejemplo, con eso tambien evitamos poner el id en el 
    // html
// Lo que logramos con esta funcion es que cuando escribimos 
// en un input, cuando salgamos del campo de texto, el texto 
// se convierte a mayuscula 
/* function convertir(nombreInput){

    nombreInput.value = nombreInput.value.toUpperCase()

} */

// ASOCIAR EVENTOS DESDE JAVASCRIPT onmouseout y onmouseove
/* function convertir(titulo){

    titulo.style.color = "red";  
}

function revertir(titulo){
    
    titulo.style.color = "black";
} */

// ASOCIAR EVENTOS DESDE JAVASCRIPT onmousedown y onmouseup
/* function convertir(titulo){

    titulo.style.color = "red";  
}

function revertir(titulo){
    
    titulo.style.color = "black";
}
function verde(titulo){
    
    titulo.style.color = "green";
} */

// ASOCIAR EVENTOS DESDE JAVASCRIPT onfocus y onblur
/* function cambiar(elementoInput){

    elementoInput.style.backgroundColor = "Yellow";  
}
function regresar(elementoInput){

    elementoInput.style.backgroundColor = "White";
} */

// ASOCIAR EVENTOS METODO addEventlistener
/* document.getElementById('nombre').addEventListener('focus',cambiar);
document.getElementById('nombre').addEventListener('blur',regresar);
document.getElementById('apellido').addEventListener('focus',cambiar);
document.getElementById('apellido').addEventListener('blur',regresar);

function cambiar(evento){

    let componente = evento.target;
    componente.style.backgroundColor = "yellow";
}

function regresar(evento){

    let componente = evento.target;
    componente.style.backgroundColor = "white"; 
} */

// FUNCIONES FLECHA EN addEventListener con JavaScript
/* document.getElementById('nombre').addEventListener('focus',cambiar);
document.getElementById('nombre').addEventListener('blur',regresar);
// Ojo con las funciones flecha, porque no podemos reutilizar codigo
document.getElementById('apellido').addEventListener('focus',(evento)=>{

    evento.target.style.backgroundColor = "pink";
});
document.getElementById('apellido').addEventListener('blur',(evento)=>{

    evento.target.style.backgroundColor = "white";
});

function cambiar(evento){

    let componente = evento.target;
    componente.style.backgroundColor = "yellow";
}

function regresar(evento){

    let componente = evento.target;
    componente.style.backgroundColor = "white"; 
} */

// DELEGACION DE EVENTOS CON JAVASCRIPT
/* Usamos el true como terder parametro porque cuando queremos
que un evento se aplique a los hijos addEventListener espera 
un tercer parametro en este caso true */
const formulario = document.getElementById("formulario");
formulario.addEventListener('focus',(evento)=>{

    evento.target.style.backgroundColor = "red";
}, false);
formulario.addEventListener('blur',(evento)=>{

    evento.target.style.backgroundColor = "white";
}, false);


document.getElementById('chulo').addEventListener('click',(evento)=>{

    evento.preventDefault()
    const formulario2 = document.getElementById("formulario")
    const h3 = document.getElementById("h3")
    formulario2.addEventListener('focus',(evento)=>{
        evento.target.style.backgroundColor = "red";
    }, true)
    formulario2.addEventListener('blur',(evento)=>{

        evento.target.style.backgroundColor = "white";
    }, true)    
})


