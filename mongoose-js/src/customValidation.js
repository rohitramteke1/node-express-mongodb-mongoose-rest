const mongoose = require('mongoose');
const schema = require('./schema');
const validator = require('validator');

const playlistSchema = new mongoose.Schema( {
    name: {
        type: String,
        lowercase: true,
        minlength: 2,
        maxlength: 15,
        require: true,
        trim: true,
        unique: false,
    },
    ctype: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['front end', 'back end', 'database'],
    },
    videos: {
        type: Number,
        // custom validation
        validate(value) {
            if (value < 0) 
                throw new Error('videos count should be positive');
        }

        // // alternate version
        // validate: {
        //     validator : function(value) {
        //         return value.length < 0;
        //     },
        //     message: "videos count should be greater than 0",
        // }
    },
    author: String,
    active: Boolean,
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("enter a valid email");
            }
        }
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const customValidation = async ( _id ) => {
    try {
        const dbStatus = await mongoose.connect('mongodb://localhost:27017/users' );

        const listOfCollections = await mongoose.connection.db.listCollections().toArray();
        const collection = listOfCollections.map( (item) => item.name )[0]; 

        const PlaylistModel = await mongoose.model(collection, playlistSchema);

        const newData = new PlaylistModel({
            name: 'java',
            ctype: 'back end',
            videos: 5,
            author: 'rohit',
            active: true,
            email: 'smr@',
        });

        const inserted = await PlaylistModel.insertMany([newData]);
        
        console.log(inserted); 
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}

customValidation("65778216b110d75741c047b5");
