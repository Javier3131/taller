const express = require('express');
const autoController = require('../controllers/autoController');
const router = express.Router();

router.post('/', autoController.auto_create_post);
router.get('/:clienteId', autoController.auto_index);
router.delete('/:id', autoController.auto_delete);

module.exports = router;
