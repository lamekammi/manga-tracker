const express = require('express');
const router = express.Router();
const mangasCtrl = require('../controllers/mangas');

router.get('/', mangasCtrl.index);
router.get('/new', mangasCtrl.new);
router.get('/:id', mangasCtrl.show);
router.post('/', mangasCtrl.create);
router.delete('/:id', mangasCtrl.delete);
router.get('/:id/edit', mangasCtrl.edit);
router.put('/:id', mangasCtrl.update);

module.exports = router;