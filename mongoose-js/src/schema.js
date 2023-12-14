const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema( {
    name: {
        type: String,
        require: true,
    },
    ctype: String,
    videos: Number, 
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = playlistSchema;