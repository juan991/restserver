// require('dotenv').config(); no hace falta que este acá
const express = require('express');
const cors = require('cors');  

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // Paths de las rutas
        this.usuariosPath = '/api/usuarios' 
        // Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }

    middlewares() {
        this.app.use( cors() );
        // Directorio público
        this.app.use( express.static('public') );
        // parseo/serializacion? y lectura del body
        this.app.use( express.json() );
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto: ", this.port);
        });
    }
}

module.exports = Server;