const express = require('express');
const router = express.Router();
const publishersCtrl = require('../controllers/publishers');
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, publishersCtrl.new);
router.post('/', publishersCtrl.create);


module.exports = router;