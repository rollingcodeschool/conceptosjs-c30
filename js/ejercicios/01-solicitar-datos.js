//Crear un programa que solicite datos al usuario como nombre, apellido, edad y los muestre por pantalla.

const nombre = prompt('Ingresa un nombre:')
const apellido = prompt('Ingresa un apellido:')
const edad = parseInt(prompt('Ingresa una edad:'))
console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(typeof(apellido))
console.log(typeof(edad))

console.log('Los datos ingresados son: ', apellido,' ,', nombre,' ,tiene ',edad, ' años'	)

alert('Los datos ingresados son: '+ apellido+', '+ nombre+', tiene '+edad+ ' años')