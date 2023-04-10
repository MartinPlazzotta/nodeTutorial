// metodos asincronos: usan callback. La funcion callback se pasa como 2do argumento de reaFile 
// El callback se ejecuta cuando el metodo anterior termina
const {readFile, writeFile} = require('fs')
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result)=> {
    if(err) {
        console.log(err)
        return
    } else {
        console.log(result)
        //por no proveer el encoding 'utf8' al readFile, este console.log va a imprimir un buffer
    }
 } )

 //ahora quiero hacer lo mismo, pero ademas leer el 2do archivo y tras eso crear el archivo result

 readFile('./content/first.txt', 'utf8', (err, result)=> {
    if(err) {
        console.log(err)
        return
    } else {
        const first = result
        readFile('./content/second.txt', 
        'utf8', 
        (err, result)=> {
            if(err) {
                console.log(err);
                return
            }
            const second2 = result
            writeFile('./content/result-async.txt', 
            `Este es el resultado async: \n ${first} \n ${second2}`,
            (err, res )=> { if (err) {
                console.log(err);
                return }
                console.log("Write termino ok");
                console.log(res)
         })
        } 
        )
        
    }
 } )

 console.log('start next task');
//CALLBACK HELL !!! Hay que usar Promises y async-await