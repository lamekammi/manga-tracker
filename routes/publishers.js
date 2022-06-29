const express = require('express');
const router = express.Router();
const publishersCtrl = require('../controllers/publishers');

router.get('/new', publishersCtrl.new);

module.exports = router;