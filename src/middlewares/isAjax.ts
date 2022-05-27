export default (req) => {
  return !req.accepts("html") || req.xhr ? true : false;
};
