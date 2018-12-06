/**
 * 
 * @param {String} name 
 * @param {Boolean} isSession 
 */

const getStorage = (name, isSession = true) => {
  if (name && isSession) {
    return JSON.parse(sessionStorage[name]);
  } else {
    return JSON.parse(localStorage[name]);
  }
};

module.exports.default = module.exports = getStorage;