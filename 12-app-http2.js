// Usando la propiedad url del objeto request , podemos 
//saber el endpoint solicitado ( home , /about ,) 

const http = require('http')

const server = http.createServer( (req, res ) => {
    if (req.url === '/') {
        res.end('THis is our home page')
        return
    }
    if (req.url === '/about') {
        res.end('THis is our history')
        return
                
    }
    // sino pidio el home ni el about lo envio a una pagina de redireccion
    res.end(`
    <h1>OPPS!!!</h1>
    <a href="/">return to home page</a>`)

    } )

server.listen(5001)
// esta funcionalidad de direccionamiento se implementa en el modulo express.js