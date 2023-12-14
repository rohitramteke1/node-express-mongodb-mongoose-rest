const mongoose = require('mongoose');

const schema = require('./schema');

const readData = async () => {
    try {
        const dbStatus = await mongoose.connect('mongodb://localhost:27017/users');
        const PlaylistModel = mongoose.model('playlists', schema);


        const filter = {author: 'Thapa Technical'};
        const update = {author: 'rohit'};

        const updateStatus = await PlaylistModel.updateMany(filter, update);
        console.log(updateStatus);
        
    } catch (err) {
        console.error("error: ", err.message);
    } finally {
        mongoose.connection.close();
    }
}

readData();