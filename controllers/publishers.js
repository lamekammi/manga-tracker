const Publisher = require('../models/publisher');

module.exports = {
    new: newPublisher
};

function newPublisher(req, res) {
    Publisher.find({}, function(err, publishers) {
        res.render('publishers/new', {
            publishers
        });
    })
}