const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});

const GameSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    categorie: {
        type: String,
        required: true
    },
    tags: [String],
    description: {
        type: String,
        required: true,
    },
    images: [ImageSchema],
    price: {
        type: Number,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }]

});

module.exports = mongoose.model('Game', GameSchema);