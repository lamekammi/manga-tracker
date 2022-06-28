const Manga = require('../models/manga');

module.exports = {
    index,
    new: newManga,
    create
};

function index(req, res) {
    Manga.find({}, function(err, mangas) {
        res.render('mangas/index', {mangas});
    });
}

function newManga(req, res) {
    res.render('mangas/new');
};

function create(req, res) {
    //req.body.chapter = Number(req.body.chapter);
    const manga = new Manga(req.body);
    manga.save(function(err) {
        if (err) return res.redirect('/mangas/new');
        console.log(manga);
        res.redirect('/mangas');
    })
}