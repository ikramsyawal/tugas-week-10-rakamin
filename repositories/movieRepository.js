const { Movie } = require("../models");

class MovieRepository {
  static findAll = async (params) => {
    try {
      const movie = await Movie.findAll(params);
      return movie;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (params) => {
    try {
      const movie = await Movie.findOne(params);
      if (!movie) {
        throw { name: "errorNotFound", message: "Movie not found" };
      }
      return movie;
    } catch (err) {
      throw { name: "errorNotFound", message: "Movie not found" };
    }
  };

  static create = async (params) => {
    try {
      const movie = await Movie.create(params);
      return movie;
    } catch (err) {
      throw { name: "badRequest", message: "Bad Request" };
    }
  };
}

module.exports = MovieRepository;
