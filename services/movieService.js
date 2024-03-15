const movieRepository = require("../repositories/movieRepository");

class MovieService {
  static findAll = async (params) => {
    try {
      const movie = await movieRepository.findAll(params);
      return movie;
    } catch (error) {
      throw error;
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
    } catch (error) {
      throw error;
    }
  };
}

module.exports = MovieService;
