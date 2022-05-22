const { responseCustome } = require("../utils/index.js");
module.exports = (req, res, next) => {
  let status = 404;
  res.status(status).json(responseCustome("Endpoint Not found", status)).end();
};
