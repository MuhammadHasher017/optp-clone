const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crudDB", (err) => {
  if (!err) {
    console.log("Running...");
  } else {
    console.log("Not Running");
  }
});

module.exports = mongoose;
