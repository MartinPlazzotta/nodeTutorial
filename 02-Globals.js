// GLOBALS - NO WINDOW OBJECT

// Pero existe el concepto de variables globales,
// las cuales puedo acceder desde cualquier lugar del codigo
// Algunas variables globales son

// __dirname : directorio actual
// __filename > nombre del archivo
// require  :  funcion para usar modulos (CommonJS)
// module  : info del modulo actual
// process <- nos da info del enviroment donde ejecuta (ejemplo el servidor: )

console.log(__dirname)
console.log(__filename)

setInterval( () => { console.log("Hola") } , 1000)

//probar la funcion setTimeout()

