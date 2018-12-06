/**
 * 
 * @param {String} url 
 * @param {String} keyName 
 */

const getParams = (url = '', keyName = '') => {
  let result = {};
  let params = url.substring(url.indexOf('?') + 1);
  params.split('&').forEach(item => {
    let indexFlag = item.indexOf('=');
    let name = item.substring(0, indexFlag);
    let value = item.substring(indexFlag + 1);
    result[name] = value;
  })
  if (keyName) {
    return result[keyName];
  }
  return result;
}

module.exports.default = module.exports = getParams;