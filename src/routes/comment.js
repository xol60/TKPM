const express = require('express');
const router = express.Router();

const commentController = require('../app/controllers/CommentController');


router.get('/list', commentController.list);
router.get('/:id/update', commentController.check);
module.exports = router;