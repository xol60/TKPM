const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/login', adminController.login);
router.post('/login', adminController.check);
router.get('/info', adminController.info);
router.post('/info', adminController.update);
module.exports = router;