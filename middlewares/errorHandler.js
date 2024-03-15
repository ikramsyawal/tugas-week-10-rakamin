const errorHandler = (error, req, res, next) => {
  console.error(error);
  if (error.name === "errorNotFound") {
    res.status(404).json({ message: error.message });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = errorHandler;
