const Movie = require("../models/movies");
// npm start -- --find --findOne --key "keyhere" --value "value"
const find = async (argv) => {
  try {
    if (argv.findOne) {
      const foundOne = await Movie.findOne({
        [argv.key]: argv.value,
      });
      console.log(
        `Search for ${argv.key} and ${argv.value}. You're result is ${foundOne.title}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = find;
