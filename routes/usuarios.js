const {Router} = require('express');
const router = Router();
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');

// La ruta importa sus respectivos controladores 
router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);  // agrego el ":" despues del slash para recibir los params

router.delete('/', usuariosDelete);

module.exports = router;