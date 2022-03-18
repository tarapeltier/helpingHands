const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    title: { type: String,
        required: [
            true,
            "Story must have a title!"
            ],
        minlength: [
            3,
            "Title must be 3 characters or more!"
        ]},
    body: { type: String,
        required: [
            true,
            "Story must have a body!"
            ],
        minlength: [
            3,
            "Body must be 3 characters or more!"
        ]},
    imageFile: { type: String,
        required: [
            true,
            "Must have an image!"
            ]},
    }, { timestamps: true });

module.exports = mongoose.model('Story', StorySchema);