const mongoose = require('mongoose');

const NeedSchema = new mongoose.Schema({
    description: { type: String,
        required: [
            true,
            "Need must have a description!"
            ],
        minlength: [
            3,
            "Description must be 3 characters or more!"
        ]}
    }, { timestamps: true });

module.exports = mongoose.model('Need', NeedSchema);

