module.exports = (req, res, next) => {
  if (
    typeof req.headers.api_token === "undefined" &&
    req.headers.api_token == process.env.API_TOKEN
  ) {
    res.status(404).json({
      error: {
        message: `No estas autorizado para utilizar la api de node`,
      },
    });
  } else {
    next();
  }
};
