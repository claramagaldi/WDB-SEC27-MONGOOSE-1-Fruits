const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

//fruit.save();

Fruit.updateOne({
  name: "Apple"
}, {
  rating: 8
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("1 - Successfully updated the document.")
  }
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit!"
});

//pineapple.save();

const john = new Person({
  name: "John",
  age: 37
});

// john.save();

const amy = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});

//amy.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 8,
  review: "Very good!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 10,
  review: "Amazing!"
});

const banana = new Fruit({
  name: "Banana",
  rating: 7,
  review: "Sweet fruit."
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("2 - Successfully saved all the fruits to fruitsDB.")
//     printFruitName();
//   }
// });

Fruit.updateOne({
  name: "Apple"
}, {
  rating: 8
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("4 - Successfully updated the document 'Apple'.");
  }
});

Person.updateOne({
  name: "John"
}, {
  favouriteFruit: banana
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("3 - Successfully updated the document 'John'.");
  }
});

Fruit.deleteOne({
  name: "Apple"
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("5 - Successfully deleted the document 'Apple'.")
  }
});

//Prints list of names

setTimeout(() => {
  Fruit.find(function(err, fruits) {
    if (err) {
      console.log(err);
    } else {
      //console.log(fruits);
      mongoose.connection.close();
      fruits.forEach((fruit) => {
        console.log(fruit.name);
      });
      console.log("--------");
    }
  });
}, 500);

// Person.deleteMany({
//   name: "John"
// }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("5 - Successfully deleted the documents.")
//   }
// });
