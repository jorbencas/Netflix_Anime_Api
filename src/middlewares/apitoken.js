const { responseCustome } = require("../utils/index.js");
const isLocalHost = require("./isLocalHost.js");
module.exports = (req, res, next) => {
  if (
    !isLocalHost(req) &&
    (typeof req.headers.api_token == "undefined" ||
      req.headers.api_token == process.env.API_TOKEN)
  ) {
    let message = `No estas autorizado para utilizar la api de cosas de anime`;
    let status = 404;
    res.status(status).json(responseCustome(message, status)).end();
  } else {
    next();
  }
};
