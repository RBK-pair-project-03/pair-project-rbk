const { db } = require("./index.js");
const {Pets} = require("./Pets.js");
const petData = require("../data.json")

const insertPets = function () {
  Pets.create(petData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertPets();