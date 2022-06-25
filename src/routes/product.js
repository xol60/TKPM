const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');


router.get('/list', productController.list);
router.get('/:id/update', productController.lock);
router.post('/list', productController.add);
module.exports = router;