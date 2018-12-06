/**
 * 
 * @param {String} email 
 */
const isEmail = (email = '') => {
  if (typeof email === 'string') {
    let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
  } else {
    return false;
  }
}

module.exports.default = module.exports = isEmail;