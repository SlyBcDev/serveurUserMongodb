const Movie = require("../models/movies");

module.exports = {
  readAll(req, res) {
    Movie.find().then((movies) => {
      res.send(movies);
    });
  },
  read(req, res) {
    const { id } = req.params;
    Movie.findById(id).then((movie) => {
      res.send(movie);
    });
  },
  create(req, res) {
    const title = req.body.title;
    const duration = req.body.duration;

    const movie = new Movie({ title, duration });
    movie.save().then(() => {
      res.send({ result: movie });
    });
  },
  delete(req, res) {
    const { id } = req.body;
    Movie.findByIdAndRemove(id).then((movie) => {
      res.send(movie);
    });
  },
};
