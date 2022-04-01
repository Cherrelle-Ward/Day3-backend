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
const update = require("./utils/update");

(async () => {
  // database connection linked
  await mongoose.connect(process.env.MONGO_URI);
  // reads models and makes mongoosedb use that structure
  await Movie.syncIndexes();

  // ! add a MOVIE object
  if (argv.add) {
    await add(argv);
  }
  //! find by
  else if (argv.find) {
    await find(argv);
  }
  //!   delete
  else if (argv.deleteMovie) {
    await deleteMovie(argv);
  }
  //! update
  else if (argv.update) {
    await update(argv);
  }
  // ! LIST
  // *npm start -- --list
  else if (argv.list) {
    const movieCollection = await Movie.find({ Movie });
    console.log({ movieCollection });
  }

  // terminates connection to allow us to write in terminal
  await mongoose.connection.close();
})();

// todo feature / implemented list branch name for next git push
