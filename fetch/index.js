var fetch = require("node-fetch");

function loadData(options = {
  url: '/',
  data: {},
  methods: 'get',
  success: function () {},
  fail: function () {},
  headers: {
    'Content-Type': 'application/json'
  }
}) {
  // post or put
  let {
    url,
    data,
    methods,
    success,
    fail,
    headers
  } = options;
  if (methods === 'post' || methods === 'put') {
    fetch(url, {
        method: 'POST',
        body: data,
        headers: new Headers(headers)
      })
      .catch(error => {
        console.error(`${url} ERROR`);
        fail(error);
      })
      .then(r => r.json().then(data => ({
        status: r.status,
        body: data
      })))
      .then(obj => {
        success(obj.body);
      });
  } else {
    // get
    let params = [];
    let keys = Object.keys(data || {});
    if (keys.length) {
      keys.forEach((item => {
        params.push(`${item}=${data[item]}`);
      }))
    }
    fetch(`${url}?${params.join('&')}`).catch(error => {
        console.error(`${url} ERROR`);
        fail(error);
      })
      .then(r => r.json().then(data => ({
        status: r.status,
        body: data
      })))
      .then(obj => {
        success(obj.body)
      });
  }
}
module.exports.default = module.exports = loadData;