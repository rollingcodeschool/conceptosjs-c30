//Esto es un comentario de una linea

/*
Esto es un comentario
de multiples 
lineas
*/

//Como declarar variables en JS: let - const - var ❌

let nombreUsuario;
let anio = 2026

const url = 'https://universe.rollingcodeschool.com/'

console.log('hola mundo')
// console.log('Año: ', anio) concatenar
console.log('Año: ' + anio) 
//cambiar el valor de una variable
anio = 2027
console.log('Año nuevo: ' + anio) 

// url = 'hola mundo' ❌ no se puede modifiar el valor de una constante
console.log('URL: ' + url) 
let encendido = true
let vacio = null

// tipo de datos: primitivos
console.log( typeof(url) ) //string
console.log( typeof(anio) ) //number
console.log( typeof(15.5) ) //number
console.log( typeof(-15.5) ) //number
console.log( typeof(encendido) ) //boolean
console.log( typeof(nombreUsuario) ) //undefined
console.log( typeof(null) ) //null


// tipo de datos: por referencia
const pelicula = {}
console.log(typeof(pelicula))// object, arrays