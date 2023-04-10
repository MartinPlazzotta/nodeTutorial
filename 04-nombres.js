const john = `Johan`
const peter = `Peter`
const secreto =`Esto es un secreto`

//si ejecuto nombres en consola, en el console.log
// veremos la salida de log(module). Este tiene un atributo exports
// tal como esta la cosa exports sera el objeto vacio. 
// Nosotros debemos decidir que exportamos desde este modulo. (recordar: share minimum)
// lo que se exporte es accesible en cualquier lugar de la app

console.log(module);

module.exports = {john, peter}
console.log(module);

//ahora en la app puedo hacer un require de este modulo