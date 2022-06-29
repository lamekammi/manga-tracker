const express = require('express');
const router = express.Router();
const publishersCtrl = require('../controllers/publishers');

router.get('/new', publishersCtrl.new);
router.post('/', publishersCtrl.create);

module.exports = router;