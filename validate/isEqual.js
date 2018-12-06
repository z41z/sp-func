/**
 * Equal for Password
 * @param {String} str 
 * @param {String} compare 
 * @param {Boolean} isDeep 
 */
const isEqual = (str, compare, isDeep = false) => {
  return isDeep ? str === compare : str == compare;
}
module.exports.default = module.exports = isEqual;