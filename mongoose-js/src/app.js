const mongoose = require('mongoose');
const playlistSchema = require('./schema');

const connectToDB = async () => {

    try {
        // first connect to database
        const DBStatus = await mongoose.connect("mongodb://localhost:27017/users");
        console.log("connection established...!");

        // list of all collection from the database
        const collection = await mongoose.connection.db.listCollections().toArray();

        // fetch all the names of the collections
        const playlistCollection = collection.map( (item) => item.name )[0];

        // connect to Model ( collection )
        const PlaylistModel = mongoose.model(playlistCollection, playlistSchema);

        // fetch all the data
        // const result = await PlaylistModel.find( {ctype : { $nin : ['Front End', 'Back End'] } } );
        // const result = await PlaylistModel.find().sort( {name : -1} );
        const result = await PlaylistModel.find();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// connectToDB();


const updateDocument = async (_id) => {
    const status = await mongoose.connect("mongodb://localhost:27017/users");
    const listOfAllCollections = await mongoose.connection.db.listCollections().toArray();
    const collectionName = listOfAllCollections.map( (collection) => collection.name )[0];
    const PlaylistModel = await mongoose.model(collectionName, playlistSchema);

    console.log( await PlaylistModel.find() );
    
    try {
        const result = await PlaylistModel.updateOne( {_id}, {
            $set : {
                name: 'MongoDB',
            }
        } );
    } catch (err) {
        console.log(err);
    }
}

updateDocument("65778216b110d75741c047b3");