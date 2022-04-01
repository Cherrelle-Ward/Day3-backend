// uniform resource identifier -URI, service on internet
// uniform resource location (URL), is a type of URI
require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const mongoose = require("mongoose");
// model imports
const Movie = require("./models/movies");
// utils imports
const add = require("./utils/add");
const find = require("./utils/find");
const deleteMovie = require("./utils/delete");
////////////////////////
(async () => {
  // database connection linked
  await mongoose.connect(process.env.MONGO_URI);
  // reads models and makes mongoosedb use that structure
  await Movie.syncIndexes();

  // ! add a MOVIE object

  if (argv.add) {
    await add(argv);
  }
  //! find by title
  else if (argv.find) {
    await find(argv);
  }
  //!   delete method
  else if (argv.deleteMovie) {
    await deleteMovie(argv);
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
  else if (argv.list) {
    const movieCollection = await Movie.find({ Movie });
    console.log({ movieCollection });
  }

  // terminates connection to allow us to write in terminal
  await mongoose.connection.close();
})();

// todo feature / implemented list branch name for next git push
