var wrapper = require('./wrapper.js');

module.exports = function (binPath) {
  return wrapper(require('./soljson.js'), binPath);
}
