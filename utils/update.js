const Movie = require("../models/movies");
// *npm start-- --update --updateMovie --title "title" --updated "newname"

const update = async (argv) => {
  try {
    if (argv.updateMovie) {
      const updateMovie = await Movie.findOne({
        //   TODO implement all Keys to work
        title: argv.title,
        // actor,
        // year,
        // genre,
        // rating,
        // director,
      }).updateOne({
        title: argv.updated,
      });
      console.log(updateMovie);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = update;
