const express = require('express');
const controller = require('../controllers/user');
const admin = require('../middleware/admin');
const router = express.Router();

router.get('/', admin.authenticate, controller.findAll);
router.get('/me', controller.getCurrentUser);
router.get('/:id', admin.authenticate, controller.findOne);
router.put('/admin/:id', admin.authenticate, controller.updateToAdmin);
router.put('/', controller.updateCurrent);
router.put('/:id', admin.authenticate, controller.update);
router.delete('/', controller.deleteCurrent);
router.delete('/:id', admin.authenticate, controller.delete);
// router.post('/', controller.create);

module.exports = router;
