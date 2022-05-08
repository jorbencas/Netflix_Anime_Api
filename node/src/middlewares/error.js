module.exports = (err, req, res) => {
  const error = app.get("env") === "dev" ? err : {};
  const status = err.status || 500;

  res.status(status).json({
    error: {
      message: error.message,
    },
  });
};
