const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    originalName: {
        type: String,
        required: true,
    },

    filename: {
        type: String,
        required: true,
    },

    path: {
        type: String,
        required: true,
    },

    mimeType: {
        type: String,
        required: true,
    },

    size: {
        type: Number,
        required: true,
    },

    uploaderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model(
    "Document",
    DocumentSchema
);