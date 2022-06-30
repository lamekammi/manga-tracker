const express = require('express');
const router = express.Router();
const mangasCtrl = require('../controllers/mangas');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, mangasCtrl.index);
router.get('/new', isLoggedIn, mangasCtrl.new);
router.get('/:id', isLoggedIn, mangasCtrl.show);
router.post('/', isLoggedIn, mangasCtrl.create);
router.delete('/:id', mangasCtrl.delete);
router.get('/:id/edit', isLoggedIn, mangasCtrl.edit);
router.put('/:id', mangasCtrl.update);
router.post('/:id/publishers', mangasCtrl.addToManga);

module.exports = router;