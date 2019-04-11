var proxy = require('./proxy'),
    SafeString = proxy.SafeString;

module.exports = function lowercase(str) {
  if(str && typeof str === "string") {
    return str.toLowerCase();
  }
  return '';
};