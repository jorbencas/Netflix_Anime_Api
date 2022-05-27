const { responseCustome } = require("../utils/index.js");
export default (err, req, res) => {
  const error = app.get("env") === "dev" ? err.message : "";
  const status = err.status || 500;
  if (err.name === "ValidationError") {
    status = 422;
    let json = {
      errors: Object.keys(err.errors).reduce(function (errors, key) {
        errors[key] = err.errors[key].message;
        return errors;
      }, {}),
    };
    res.status(status).json(responseCustome(error, status, json));
  } else {
    res.status(status).json(responseCustome(error, status));
  }
};
