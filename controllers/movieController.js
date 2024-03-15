const MovieService = require("../services/movieService");

class MovieController {
  static findAll = async (req, res, next) => {
    try {
      const movies = await MovieService.findAll();
      res.status(200).json(movies);
    } catch (err) {
      next(err);
    }
  };

  static findOne = async (req, res, next) => {
    try {
      const id = req.params.id;
      const movie = await MovieService.findOne(id);
      res.status(200).json(movie);
    } catch (err) {
      next(err);
    }
  };

  static create = async (req, res, next) => {
    try {
      const bodyReq = req.body;
      const movie = await MovieService.create(bodyReq);
      res.status(201).json(movie);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieController;
