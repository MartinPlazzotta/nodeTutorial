// Modulo HTTP 
// Usando HTTP module podemos mostrar algunos features de NODE> crearemos un web server basico
const http = require('http')

const server = http.createServer( (req, res ) => {
    res.write('Welcome to our home page')
    res.end()
    // estas dos lineas son equivalentes a res.end('Welcome to our home page')

    console.log(req) // podemos ver el objeto request

} )

server.listen(5000)
// al ejecutar este js vemos que la respuesta se sirve pero el programa no termina
// esto es porque el server continua atendiendo