//veremos ahora el module path.
//recordemos que en node podemos interactuar con el fileSyistem (a diferencia de JS ejecutado en el browser)

const path = require('path') 

//una property util, el path separator del sistema, especifico de la plataforma
console.log(path.sep);

//metodo join: une un conjunto de paths con el sep especifico del sistema y devuelve un path normalizado
// Creamos la carpeta content y una subcarpeta contenideno un archivo
const filePath = path.join('/content', 'text', 'testFile.txt')
console.log(filePath);

// si agregamos separadores de mas en los argumentos del join, este de todos modos devuelve un path bien formado 
// probar lo siguiente para verlo: 
// const filePath = path.join('/content/////', 'text', 'testFile.txt')

const base = path.basename(filePath) //basename es el nombre del archivo ??
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'text', 'testFile.txt')
// recordar que __dirname es el directorio donde se ubica app.js
console.log(absolute);
//Los path absolutos son de interes pues la ruta a un resource puede ser distinta en mi maquina que en otra plataforma como Heroku  
