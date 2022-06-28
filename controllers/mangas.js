const Manga = require('../models/manga');

module.exports = {
    new: newManga
};

function newManga(req, res) {
    res.render('mangas/new');
};