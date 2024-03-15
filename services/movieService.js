const movieRepository = require("../repositories/movieRepository");

class MovieService {
  static findAll = async (params) => {
    try {
      const movie = await movieRepository.findAll(params);
      return movie;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id) => {
    try {
      const column = {
        where: {
          id,
        },
      };
      const movie = await movieRepository.findOne(column);
      return movie;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const movie = await movieRepository.create(params);
      return movie;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = MovieService;
