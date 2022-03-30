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
    age: {
      type: Number,
      min: 1,
      max: 100,
      validate: {
        validator: (num) => num % 2 === 0,
        message: (props) => `${props.value} is not even`,
      },
    },
  });

  //!   delete method
  //   await Cat.deleteMany({});

  // ! how to add a cat object
  // try {
  //   const cat = new Cat({ name: "dan", age: 2 });
  //   await cat.save();
  //   console.log("im the cat", cat);
  // } catch (error) {
  //   console.log(error);
  // }

  //! how to find by ID
  // const foundCat = await Cat.findById("624436cd0f59c7823d60c298");
  // console.log("im foundCat", foundCat);
  ////////////////////////////
  //! how to update object
  // todo add errors
  // try {
  //   await Cat.updateOne({ name: "dylan" }, { name: "Robin", age: 20 });
  // } catch (error) {
  //   console.log(`error name does not exist ${error}`);
  // }

  // todo another example - Not working
  // await Cat.findOneAndUpdate(
  //   { name: "dan" },
  //   { name: "danny" },
  //   (error, data) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log(data);
  //     }
  //   }
  // );
  ///////////////////////////
  // ! LIST
  const catList = await Cat.find({ Cat });
  console.log(catList, "i am the catlist");
  /////////////////////////////

  // terminates connection to allow us to write in terminal
  mongoose.connection.close();
})();

// todo feature / implemented list branch name for next git push
