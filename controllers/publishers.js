const Manga = require('../models/manga');
const Publisher = require('../models/publisher');

module.exports = {
    new: newPublisher,
    create,
};

function newPublisher(req, res) {
    Publisher.find({}, function(err, publishers) {
        res.render('publishers/new', {
            publishers
        });
    })
};

function create(req, res) {
    Publisher.create(req.body, function(err, publisher) {
        res.redirect('/publishers/new');
    });
};

