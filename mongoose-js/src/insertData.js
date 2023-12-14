const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema( {
    name: {
        type: String,
        lowercase: true,
        minlength: 2,
        maxlength: 15,
        require: true,
        trim: true,
    },
    ctype: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['front end', 'back end', 'database'],
    },
    videos: Number, 
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now,
    }
});


const insertData = async () => {
    try {
        const dbStatus = await mongoose.connect("mongodb://localhost:27017/users");
        const PlaylistModel = await mongoose.model('playlists', playlistSchema);
        const newData = new PlaylistModel({
            name: "         Mongoose-JS      ",
            ctype: "back end",
            videos: 4,
            author: "Thapa technical",
            active: true,
        })
        const data = await PlaylistModel.insertMany([newData]);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

insertData();