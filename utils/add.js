const Movie = require("../models/movies");

const add = async ({ title, actor, year, genre, rating, director }) => {
  try {
    const movie = new Movie({
      title,
      actor,
      year,
      genre,
      rating,
      director,
    });
    await movie.save();
    // add findOne
    console.log(movie);
  } catch (error) {
    console.log(error);
  }
};

module.exports = add;
