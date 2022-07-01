const Manga = require('../models/manga');
const Publisher = require('../models/publisher');
//const User = require('..models/user');

module.exports = {
    index,
    show,
    new: newManga,
    create,
    delete: deleteManga,
    edit,
    update,
    addToManga
};

function index(req, res) {
    Manga.find({user: req.user._id}, function(err, mangas) {
        res.render('mangas/index', {mangas});
    });
}

function show(req, res) {
    Manga.findById(req.params.id)
        .populate('publisher').exec(function(err, manga) {
            if (manga.publisher) {
                return res.render('mangas/show', { manga, publishers: null })
            } else {
                Publisher.find({}, function(err, publishers) {
                    console.log(publishers)
                    return res.render('mangas/show', { manga, publishers })
            })
        }
    })
};

function newManga(req, res) {
    res.render('mangas/new');
};

function create(req, res) {
    req.body.user = req.user._id
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const manga = new Manga(req.body);
    manga.save(function(err) {
        if (err) {
            console.log(err)
            return res.redirect('/mangas/new'); 
        }
        console.log(manga);
        res.redirect('/mangas');
    });
};

function deleteManga(req, res, next) {
    Manga.findById(req.params.id).then(function(manga) {
        if (!manga) return res.redirect('/mangas');
        manga.remove(req.params.id).then(function(){
                res.redirect('/mangas');
        })
        }).catch(function(err) {
            return next(err);
        });
    };

function edit(req, res) {
  Manga.findById(req.params.id, (err, foundManga) => {
    res.render('mangas/edit', {
        manga: foundManga
    })
  })
}

function update(req, res) {
    Manga.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (err, updatedManga) => {
            res.redirect(`/mangas/${req.params.id}`) 
        }
    )
}


function addToManga(req, res) {
    Manga.findById(req.params.id, function(err, manga) {
        manga.publisher = req.body.publisher
        manga.save(function(err) {
            res.redirect(`/mangas/${manga._id}`)
        })
    })
}