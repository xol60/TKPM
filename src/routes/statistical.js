const express = require('express');
const router = express.Router();

const statisficalController = require('../app/controllers/StatisficalController');


router.get('/', statisficalController.list);
module.exports = router;