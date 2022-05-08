const err = new Error("not Found");
module.exports = (req, res, next) => {
  err.status = 404;
  next(err);
};
