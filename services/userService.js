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
}

module.exports = UserService;
