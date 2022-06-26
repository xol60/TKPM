const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
console.log(555)
router.get('/login', adminController.login);
router.post('/login', adminController.check);
router.get('/info', adminController.info);
router.post('/info', adminController.update);
router.get('/list', adminController.list);
router.get('/:id/update',adminController.lock);
router.get('/logout', adminController.logout);
router.get('/forgot', adminController.forgot);
router.post('/forgot', adminController.change);
module.exports = router;