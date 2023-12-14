const mongoose = require('mongoose');
const schema = require('./schema');

// const playlistSchema = new mongoose.Schema( {
//     name: {
//         type: String,
//         lowercase: true,
//         minlength: 2,
//         maxlength: 15,
//         require: true,
//         trim: true,
//     },
//     ctype: {
//         type: String,
//         required: true,
//         lowercase: true,
//         enum: ['front end', 'back end', 'database'],
//     },
//     videos: Number, 
//     author: String,
//     active: Boolean,
//     date: {
//         type: Date,
//         default: Date.now,
//     }
// });



const validation = async ( _id ) => {
    try {
        const dbStatus = await mongoose.connect('mongodb://localhost:27017/users');

        const listOfCollections = await mongoose.connection.db.listCollections().toArray();
        const collection = await listOfCollections.map( (item) => item.name )[0];        
        const PlaylistModel = await mongoose.model(collection, schema);
        const updateStatus = await PlaylistModel.updateOne( { _id}, {
            name: 'Mongo-DB',
        });
        const findStatus = await PlaylistModel.find({name: 'Mongo-DB'});
        console.log(findStatus);
    } catch (err) {
        console.log(err);
    }
}

validation("65778216b110d75741c047b5");
