const userService = require("../services/userService");

class UserController {
  // get all users
  static findAll = async (req, res, next) => {
    try {
      const users = await userService.findAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;
