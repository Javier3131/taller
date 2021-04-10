const express = require('express');
const clienteController = require('../controllers/clienteController');
const router = express.Router();

router.get('/:id', clienteController.cliente_details);
router.get('/', clienteController.clientes_index);
router.post('/', clienteController.cliente_create_post);
router.delete('/:id', clienteController.cliente_delete);

module.exports = router;
