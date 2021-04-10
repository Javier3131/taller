const express = require('express');
const autoController = require('../controllers/autoController');
const router = express.Router();

router.post('/', autoController.auto_create_post);
router.delete('/', autoController.auto_delete);

module.exports = router;
