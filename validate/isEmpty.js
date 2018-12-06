/**
 * 
 * @param {String} str 
 */
const isEmpty = (str = '') => {
  if (!str.trim().length) {
    return true;
  }
  return false;
}
module.exports.default = module.exports = isEmpty;