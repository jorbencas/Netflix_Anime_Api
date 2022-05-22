module.exports = (req) => {
  return !req.accepts("html") || req.xhr ? true : false;
};
