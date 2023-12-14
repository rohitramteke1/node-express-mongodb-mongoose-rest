const mongoose = require('mongoose');
const schema = require('./schema');

const updateDocument = async (_id) => {
    try {
        // Corrected connection URL
        await mongoose.connect("mongodb://localhost:27017/users");

        const listOfAllConnections = await mongoose.connection.db.listCollections().toArray();
        const collectionName = listOfAllConnections.map((collection) => collection.name)[0];

        // Corrected model creation
        const PlaylistModel = mongoose.model(collectionName, schema);

        // Corrected updateOne usage
        const result = await PlaylistModel.findByIdAndUpdate({ _id }, {
            $set: {
                name: 'sayli',
            }
        }, {new : true});
        
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

updateDocument("65778216b110d75741c047b5");