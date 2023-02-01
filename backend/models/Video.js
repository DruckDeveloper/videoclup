const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
    title: String,
    year: Number,
    time: Number,
    lang: String,
    rel: String,
    rel_country: String
});

module.exports = mongoose.model("movies", VideoSchema);