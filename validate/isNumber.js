/**
 * 
 * @param {String} str 
 * @param {Number} length 
 */
const isNumber = (str = '', length = ("" + str).length) => {
  let regx = RegExp(`\\d{${length}}`, 'ig');
  return regx.test(str);
}
module.exports = isNumber;