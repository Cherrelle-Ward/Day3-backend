// uniform resource identifier -URI, service on internet
// uniform resource location (URL), is a type of URI

require("dotenv").config();

const mongoose = require("mongoose");

(async () => {
  // database connection linked
  mongoose.connect(process.env.MONGO_URI);

  const Cat = mongoose.model("Cat", {
    //   unique is a restraint
    name: { type: String, unique: true },
  });

  //   delete method
  //   await Cat.deleteMany({});

  const cat = new Cat({ name: "billy" });
  await cat.save();
  console.log("im the cat", cat);

  const foundCat = await Cat.findById("624436cd0f59c7823d60c298");
  console.log("im foundCat", foundCat);

  // terminates connection to allow us to write in terminal
  mongoose.connection.close();
})();
