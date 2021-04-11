const express = require('express');
const reparacionController = require('../controllers/reparacionController');
const router = express.Router();

router.post('/', reparacionController.reparacion_create_post);
router.get('/:autoId', reparacionController.reparacion_index);
router.delete('/:id', reparacionController.reparacion_delete);

module.exports = router;
