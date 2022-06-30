const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    title: String,
    chapter: {
        type: String,
    },
    reading: {
        type: String,
        enum: ['Currently Reading', 'Plan To Read', 'On Hold', 'Completed', 'Dropped'],
        default: 'Currently Reading'
    },
    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        default: 5
    },
    publisher: {type: Schema.Types.ObjectId, ref: 'Publisher'},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Manga', mangaSchema);