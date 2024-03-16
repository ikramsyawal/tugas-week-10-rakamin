const { Movie } = require("../models");

class MovieRepository {
  // find all movies
  static findAll = async (params) => {
    try {
      const movie = await Movie.findAll({ ...params, order: [["id", "ASC"]] });
      return movie;
    } catch (err) {
      throw err;
    }
  };

  // find one movie
  static findOne = async (params) => {
    try {
      const movie = await Movie.findOne(params);
      if (!movie) {
        throw { name: "errorNotFound", message: "Movie not found" };
      }
      return movie;
    } catch (err) {
      throw err;
    }
  };

  // create a new movie
  static create = async (params) => {
    try {
      if (!params.title || !params.year || !params.genres) {
        throw { name: "badRequest", message: "Bad request" };
      }
      const movie = await Movie.create(params);
      return movie;
    } catch (err) {
      throw err;
    }
  };

  // update a movie
  static update = async (id, body) => {
    try {
      if (!body.title && !body.genres && !body.year) {
        throw { name: "badRequest", message: "Bad request" };
      }
      const movie = await Movie.findOne({
        where: {
          id,
        },
      });
      if (!movie) {
        throw { name: "errorNotFound", message: "Movie not found" };
      }
      await Movie.update(body, { where: { id } });
    } catch (err) {
      throw err;
    }
  };

  // delete a movie
  static destroy = async (params) => {
    try {
      const movie = await Movie.findOne(params);
      if (!movie) {
        throw { name: "errorNotFound", message: "Movie not found" };
      }
      await movie.destroy();
    } catch (err) {
      throw err;
    }
  };
}

module.exports = MovieRepository;
