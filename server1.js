const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

var proController = require("C:/Users/DELL/Desktop/FSProject/Project/controllers/productsController.js");

var chickenController = require("C:/Users/DELL/Desktop/FSProject/Project/controllers/chickenController.js");

var fishController = require("C:/Users/DELL/Desktop/FSProject/Project/controllers/fishController.js");

var orderController = require("C:/Users/DELL/Desktop/FSProject/Project/controllers/orderController.js");

const http = require("http");
app.use(express.static(__dirname + "/dist/Project"));

const server = http.createServer(app);

server.listen(3000, function () {
  console.log("Running....");
});

mongoose.connect("mongodb://localhost:27017/crudDB", (err) => {
  if (!err) {
    console.log("Running...");
  } else {
    console.log("Not Running");
  }
});

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.listen(3000, function () {
  console.log("Running...//.");
});

app.use("/prod", proController);
app.use("/chick", chickenController);
app.use("/fish", fishController);
app.use("/order", orderController);
