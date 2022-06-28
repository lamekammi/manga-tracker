const express = require('express');
const router = express.Router();
const mangasCtrl = require('../controllers/mangas');

router.get('/', mangasCtrl.index);
router.get('/new', mangasCtrl.new);
router.post('/', mangasCtrl.create);

module.exports = router;