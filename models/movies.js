const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: { type: String },
  duration: {
    type: Number,
  },
});

const Movie = mongoose.model("movie", MovieSchema, "MOVIES_COLLECTION");

module.exports = Movie;
