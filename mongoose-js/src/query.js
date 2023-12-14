const mongoose = require('mongoose');
const playlistSchema = require('./schema');

const connectToDB = async () => {
    try {
        const result = await mongoose.connect('mongodb://localhost:27017/users');

        const collectionName = mongoose.connection.db.listCollection().toArray();

        const Playlist = await mongoose.model('playlists', playlistSchema);
        const dataFromDB = await Playlist.find();
        console.log(dataFromDB);
        console.log("Connection established...!");
    } catch (err) {
        console.log(err);
    }
}

connectToDB();