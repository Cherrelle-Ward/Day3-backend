const Movie = require("../models/movies");
// *npm start -- --deleteMovie --deleteOne --key "insert here" --value "insert here"
// *npm start -- --deleteMovie --deleteMany --key "insert here" --value "insert here"

const deleteMovie = async (argv) => {
  try {
    if (argv.deleteOne) {
      const deleteOne = await Movie.deleteOne({
        [argv.key]: argv.value,
      });
      console.log(deleteOne);
    } else if (argv.deleteMany) {
      const deleteMany = await Movie.deleteMany({
        [argv.key]: argv.value,
      });
      console.log(deleteMany);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = deleteMovie;
