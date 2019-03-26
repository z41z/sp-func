// module.exports.loadData = require('./fetch/index');
const serviceAPI = require('./fetch/serviceAPI');
const Validate = require('./validate/index');
const Url = require('./url/index');
const Storage = require('./storage/index');
const Rotate = require('./rotate/index');
const Form = require('./form/index');

module.exports.default = module.exports = {
  serviceAPI,
  Validate,
  Url,
  Storage,
  Rotate,
  Form
}