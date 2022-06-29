const express = require('express');
const router = express.Router();
const publishersCtrl = require('../controllers/publishers');

router.get('/index', publishersCtrl.index);

module.exports = router;