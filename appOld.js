const http = require('http');

//esto levantar un servidor sin express
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nombre: 'Andrés',
            edad: 33,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);
console.log(`escuchando el puerto 98080`);