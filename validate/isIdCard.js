/**
 * Chinese IdCard Validate (length = 18)
 * @param {String} id
 */

const number = require('./isNumber');

const idCard = (id = '') => {
  let strId = String(id).trim();
  if (strId.length === 18) {
    let idParse;
    if ((strId.substr(-1, 1).toLowerCase() === 'x' && number(strId.substring(0, 17))) || (number(strId))) {
      idParse = JSON.parse(strId.replace(/(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d{1})((\d|x|X){1})/, `{"areaCode":"$1","year":"$2","month":"$3","day":"$4","other":"$5","gender":"$6","flag":"$7"}`));
      let date = new Date();
      let {
        areaCode,
        year,
        month,
        day,
        gender,
        flag
      } = idParse;
      if (year < 1900 || year > date.getFullYear() || month > 12 || day > new Date(year, month, 0).getDate()) {
        return false;
      } else {
        var total = 0;
        let weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        let arr = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
        strId.substring(0, 17).split("").forEach((item, index) => {
          total += (item * weight[index])
        })
        if (arr[total % 11] === flag.toUpperCase()) {
          return {
            areaCode: areaCode,
            year: year,
            month: month,
            day: day,
            gender: (gender % 2) ? 1 : 0
          };
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};
module.exports.default = module.exports = idCard;