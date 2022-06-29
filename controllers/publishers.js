const Publisher = require('../models/publisher');

module.exports = {
    index
}

function index(req, res) {
    Publisher.find({}, function(err, publishers) {
        res.render('publishers/index', {publishers});
    })
}
