const express = require('express');
const controller = require('../controllers/todo');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id/complete', controller.complete);
router.put('/:id/uncomplete', controller.uncomplete);
router.put('/:id', controller.update);
router.post('/', controller.create);
router.delete('/:id', controller.delete);

module.exports = router;
