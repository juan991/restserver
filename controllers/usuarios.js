// Nota: Pasamos todo el callback de las funciones que
// definen las Rutas (es el 2do argumento de dicha función)
const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        ok  : true,
        msg : 'get API - controlador'
    });
};
const usuariosPost = (req, res = response) => {
    const body = req.body;
    const { nombre, edad }= req.body;  // destructuracion
    res.status(201).json({
        msg : 'post API - controlador',
        body,
        nombre,
        edad,
    });
};
const usuariosPut = (req, res = response) => {
    const id = req.params.id
    res.json({
        ok  : true,
        msg : 'put API - controlador',
        id
    });
};
const usuariosDelete = (req, res = response) => {
    res.status(201).json({
        ok  : true,
        msg : 'delete API - controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
};