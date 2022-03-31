// uniform resource identifier -URI, service on internet
// uniform resource location (URL), is a type of URI
require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const mongoose = require("mongoose");

(async () => {
  // database connection linked
  mongoose.connect(process.env.MONGO_URI);

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
  // await Movie.syncIndexes();

  // ! how to add a MOVIE object
  // node index.js --add --title --actor --year --genre --rating --director

  if (argv.add) {
    const movie = new Movie({
      title: argv.title,
      actor: argv.actor,
      year: argv.year,
      genre: argv.genre,
      rating: argv.rating,
      director: argv.director,
    });
    await movie.save();
    console.log(movie);
  }
  //! how to find by title
  // node index.js --findOne --title "titlename"
  else if (argv.findOne) {
    const foundOne = await Movie.findOne({
      title: argv.title,
    });
    console.log(foundOne);
  }
  //!   delete method
  // node index.js --deleteOne --title "title" or --genre etc.....
  else if (argv.deleteOne) {
    const deleteMovie = await Movie.deleteOne({
      title: argv.title,
      // actor: argv.actor,
      // year: argv.year,
      // genre: argv.genre,
      // rating: argv.rating,
      // director: argv.director,
    });
    console.log(`${argv.title} has been deleted from the system`);
  }
  //! how to update object'
  // node index.js --updateOne --title "title" --updatedTitle "newname"
  else if (argv.updateOne) {
    const updateMovie = await Movie.findOne({ title: argv.title }).updateOne({
      title: argv.updatedTitle,
    });
    console.log(`${argv.title} has been updated to ${argv.updatedTitle}`);
    ///////////////////////
    // not working example
    // const updateMovie = await Movie.updateOne(
    //   { title: argv.title },
    //   { title: argv.updatedTitle }
    // );
    // console.log(updateMovie);
  }
  // ! LIST
  // node index.js
  else if (argv.find) {
    const movieCollection = await Movie.find({ Movie });
    console.log({ movieCollection });
  }

  // terminates connection to allow us to write in terminal
  mongoose.connection.close();
})();

// todo feature / implemented list branch name for next git push
