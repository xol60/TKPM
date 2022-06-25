const express = require('express');
const router = express.Router();

const orderController = require('../app/controllers/OrderController');


router.get('/list', orderController.list);
router.get('/:id/update', orderController.update);
module.exports = router;