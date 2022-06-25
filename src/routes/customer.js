const express = require('express');
const router = express.Router();

const customerController = require('../app/controllers/CustomerController');


router.get('/list', customerController.list);
router.get('/:id/update', customerController.lock);
module.exports = router;