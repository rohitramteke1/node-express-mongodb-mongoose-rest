const mongoose = require('mongoose');
const schema = require('./schema');

const deleteDocument = async (_id) => {
    try {
        const status = await mongoose.connect("mongodb://localhost:27017/users");
        const listOfCollection = await mongoose.connection.db.listCollections().toArray();
        const collectionName = listOfCollection.map( (collection) => collection.name)[0];
    
        const PlaylistModel = mongoose.model(collectionName, schema);
        const result = await PlaylistModel.find( {_id} ).count();
        console.log(result);
        const deleted = await PlaylistModel.deleteOne( {_id} );
        console.log(deleted);
    } catch (err) {
        console.log(err);
    }
}

deleteDocument("65778216b110d75741c047b2");