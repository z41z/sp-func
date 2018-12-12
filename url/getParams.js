/**
 * 
 * @param {String} url 
 * @param {String} keyName 
 */

const getParams = (url = window.location.href, keyName = '') => {
  let result = {};
  url.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    result[$1] = $3
  })
  if (keyName) {
    return result[keyName];
  }
  return result;
};

module.exports.default = module.exports = getParams;