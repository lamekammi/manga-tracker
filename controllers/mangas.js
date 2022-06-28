const Manga = require('../models/manga');

module.exports = {
    index,
    show,
    new: newManga,
    create,
    delete: deleteManga
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
    });
};


// must come back to fix -- is sending to a query not found page instead of redirecting back to '/mangas'
function deleteManga(req, res, next) {
    Manga.findById(req.params.id).then(function(manga) {
        if (!manga) return res.redirect('/mangas');
        manga.remove(req.params.id);
        manga.save().then(function() {
            res.redirect('/mangas');
        }).catch(function(err) {
            return next(err);
        });
    });
};
