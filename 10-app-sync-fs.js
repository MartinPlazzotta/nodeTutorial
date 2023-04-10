//Veremos el modulo fs
// Acceder al filesystem se puede hacer de dos modos: 
// Asincrono (non-blocking) o sincrono (blocking)

//Hacemos require deestructurado de los metodos que nos interesan

const { readFileSync, writeFileSync } = require('fs')

//leeremos dos arhcivos y crearemos un tercero
const first = readFileSync('./content/first.txt', 'utf-8') //el encoder por defecto es utf8, igual lo hemos especificado a modo de ejemplo
const second = readFileSync('./content/second.txt', 'utf-8') 
console.log(first, second);

//creo el tercer archivo
writeFileSync('./content/result-sync.txt',`Hello world sincrono. Este es el result: \n ${first} \n ${second}`)

//un tercer argumento opcional del write es el mode, por defecto el mode es overwrite
writeFileSync('./content/result-sync-append.txt',
`Hello world sincrono append. \n `,
 {flag:'a'})

 