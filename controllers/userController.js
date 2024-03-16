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

  // get user by id
  static findOne = async (req, res, next) => {
    try {
      const id = req.params.id;
      const user = await userService.findOne(id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };

  // create user
  static create = async (req, res, next) => {
    try {
      const bodyReq = req.body;
      const user = await userService.create(bodyReq);
      res
        .status(201)
        .json({ message: "User created successfully", data: user });
    } catch (err) {
      next(err);
    }
  };

  // update user
  static update = async (req, res, next) => {
    try {
      const user = await userService.update(req.params.id, req.body);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
  // delete user
  static destroy = async (req, res, next) => {
    try {
      await userService.destroy(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;
