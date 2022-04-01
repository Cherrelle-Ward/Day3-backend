const Movie = require("../models/movies");
// node index.js --add --title "name"--actor "name" --year 1980 --genre "horror" --rating 5 --director "name"

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
    console.log(movie, `you have added ${title}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = add;
