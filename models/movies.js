const mongoose = require("mongoose");

const Movie = mongoose.model("Movie", {
  //   unique is a restraint
  title: { type: String, unique: true },
  actor: { type: String, unique: false },
  year: Number,
  genre: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  director: String,
});

module.exports = Movie;
