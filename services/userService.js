const userRepository = require("../repositories/userRepository");

class UserService {
  // get all users
  static findAll = async (params) => {
    try {
      const users = await userRepository.findAll(params);
      return users;
    } catch (err) {
      throw err;
    }
  };

  // get a user by id
  static findOne = async (id) => {
    try {
      const filterOption = {
        where: {
          id,
        },
      };
      const user = await userRepository.findOne(filterOption);
      return user;
    } catch (err) {
      throw err;
    }
  };

  // create a new user
  static create = async (params) => {
    try {
      const user = await userRepository.create(params);
      return user;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserService;
