const { User } = require("../models");

class UserRepository {
  // get all users
  static findAll = async (params) => {
    try {
      const users = await User.findAll(params);
      return users;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserRepository;
