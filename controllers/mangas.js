const Manga = require('../models/manga');

module.exports = {
    index,
    show,
    new: newManga,
    create
};

function index(req, res) {
    Manga.find({}, function(err, mangas) {
        res.render('mangas/index', {mangas});
    });
}

function show(req, res) {
    Manga.findById(req.params.id, function(err, manga) {
        res.render('mangas/show', { manga })
    })
};

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