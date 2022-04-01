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

(async () => {
  // database connection linked
  mongoose.connect(process.env.MONGO_URI);

  // await Movie.syncIndexes();

  // ! how to add a MOVIE object
  // node index.js --add --title --actor --year --genre --rating --director

  if (argv.add) {
    add(argv);
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
  else if (argv.list) {
    const movieCollection = await Movie.find({ Movie });
    console.log({ movieCollection });
  }

  // terminates connection to allow us to write in terminal
  mongoose.connection.close();
})();

// todo feature / implemented list branch name for next git push
