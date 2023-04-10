//veremos aqui algunos modulos buitl in
// http, os, fs, path 

const os = require('os') // no lleva . antes de la /
//como es built in no preciso instalar nada antes
//invoco algunas funciones del modulo.
console.log(os.homedir())
console.log(os.hostname())

//no tengo porque hacer un require de todo el modulo
// podemos requerir solo algunos elelemntes del modulo
const infoUsuario = require('os').userInfo

console.log(infoUsuario());

//esto es lo mismo
const infoUsuario2 = require('os').userInfo()
console.log(infoUsuario2);
//ver que esta vez coloreo el const infoUsuario2 como si fuera una variable

//Cuantos segundos hace que la maquina esta encendidad ? 
console.log(`El tiempo es ${os.uptime()} segundos`);

//Creemos un objeto con info del sistema
const sysInfo = {
    name:os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(sysInfo)

