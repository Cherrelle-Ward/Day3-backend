const mongoose = require("mongoose");

const add = (argv) => {

    try {
        const movie = new Movie({
            title: argv.title,
            actor: argv.actor,
            year: argv.year,
            genre: argv.genre,
            rating: argv.rating,
            director: argv.director,
        });
        await movie.save();
        // add findOne
        console.log(movie);
    } catch (error) {
        console.log(error);
    }
  
};

module.exports = add;
