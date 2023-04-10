// MODULES

//Node usa CommonJS. En CommonJS cada files un modulo por defecto
// Un modulo es codigo encapsulado para compartir (Solo compartir el codigo minimo necesario).  

const john = `Johan`

/ Ahora desde app.js voy a llamar a usar el modulo nombres.js
// y el utils

const names = require('./04-nombres')
const sayhi = require('./05-utils')

//el path del requiere empieza con punto pues es un modulo nuestro.
// hay otros casos como modulos built-in ? y de terceros. 

console.log(names);
console.log(sayhi)
//ahora en la salida veo que tengo acceso a los nombres que el modulo comparte
//no veo 'Secreto'
sayhi('Lalo')

// sayhi(john) //esto da error de referencia y corta la ejecucion
sayhi(names.john) // esto no 

//en 06-masExports creamos mas exportables. Vamos a importarlos
const data = require('./06-masExports')
// console.log('data')

require('./07-mindBlow')
// aqui hacemos un require pero sin asignar a una varible ni invocar esa variable
// vemos que al hacer el require del modulo , el modulo se ejecuta tras bambalinas
// En resumen: cuando exportamos un modulo, 
// este se ejecuta 
// si acaso tiene alguna invocacion en su codigo, como la invocacion a add() en linea 11 de 07-mindBlow.js