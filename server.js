const express = require("express");
const server = express();
const routes = require("./routes/index");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
server.use(bodyParser.json());
server.set("json spaces", 2);
routes(server);

server.listen(3050, () => {
  console.log("ecoute sur le port 3050");

  mongoose.connect("mongodb://192.168.0.44:/UserMovies", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  mongoose.connection
    .once("open", () => console.log("connexion à mongodb établie"))
    .on("error", (error) => {
      console.warn("Warning", error);
    });
});
