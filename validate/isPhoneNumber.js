/**
 * Chinese PhoneNumber Validate (length = 11)
 * @param {String,Number} num 
 */

const number = require('./isNumber');
const isPhoneNumber = (num) => {
  if (number(num) && String(num).length === 11) {
    let parseNum = JSON.parse(String(num).replace(/(\d{1})([345789]{1})(\d{9})/, `{"firstNum":"$1","sencondNum":"$2","others":"$3"}`));
    let {
      firstNum,
      secondNum
    } = parseNum;
    if (firstNum === "1" || secondNum) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
module.exports = isPhoneNumber;