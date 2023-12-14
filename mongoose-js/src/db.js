const mongoose = require('mongoose');
const playlistSchema = require('./schema');

// mongoose.connect('mongodb://localhost:27017/users')
// .then( () => {
//     console.log('connection established...!')
// })
// .catch( (err) => {
//     console.log(err);
// });

const connectToDB = async () => {
    try {
        const dbConnector = await mongoose.connect('mongodb://localhost:27017/users');
        const collections = await mongoose.connection.db.listCollections().toArray();
        const playlistCollection = collections.map( (collection) => collection.name )[0];

        // returns this things
        // {
        //     name: 'playlists',
        //     type: 'collection',
        //     options: {},
        //     info: {
        //       readOnly: false,
        //       uuid: new UUID('f860bb39-d792-4b92-8d0b-870eb04a7da0')
        //     },
        //     idIndex: { v: 2, key: [Object], name: '_id_' }
        //   }

        const PlaylistModel = mongoose.model(playlistCollection, playlistSchema);
        const result = await PlaylistModel.find();
        console.log(result);

        console.log("connection successful...!");
    } catch (err) {
        console.log(err);
    }
}

connectToDB();