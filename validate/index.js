const isNumber = require('./isNumber');
const isIdCard = require('./isIdCard');
const isPhoneNumber = require('./isPhoneNumber');
const isEqual = require('./isEqual');
const isEmail = require('./isEmail');
const isEmpty = require('./isEmpty');

module.exports.default = module.exports = {
  isNumber,
  isIdCard,
  isPhoneNumber,
  isEqual,
  isEmail,
  isEmpty
}