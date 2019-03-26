/**
 * get/set Form Data
 */
const Form = {
  getData(name = '') {
    let result = {};
    document.querySelectorAll('body [name]').forEach(el => {
      let colName = el.getAttribute('name');
      let colValue = el.value;
      result[colName] = colValue;
    });

    return name ? result[name] : result;
  },

  setData(name = '', value) {
    if (name) {
      document.querySelector(`[name=${name}]`).value = value;
    }
  }
}

module.exports.default = module.exports = Form;