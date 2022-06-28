const express = require('express');
const router = express.Router();
const mangasCtrl = require('../controllers/mangas');

router.get('/new', mangasCtrl.new);

module.exports = router;