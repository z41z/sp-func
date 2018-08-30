/**
 * 
 * @param {String} name 
 * @param {*} value 
 * @param {Boolean} isSession 
 */

const setStorage = (name, value, isSession = true) => {
  if (name && isSession) {
    sessionStorage.setItem(name, JSON.stringify(value));
  } else {
    localStorage.setItem(name, JSON.stringify(value));
  }
};

module.exports = setStorage;