module.exports = (req) => {
  return req.headers.host.includes("localhost") ? true : false;
};
