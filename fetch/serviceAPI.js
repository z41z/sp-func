// /**
//  * 
//  * @param {String} url 
//  * @param {Object} data 
//  * @param {Function} success 
//  * @param {Function} fail 
//  * @param {Object} headers 
//  */

// const axios = require('axios');

// const serviceGet = (url = '/', data = {}, success = function () {}, fail = function () {}, headers = {}) => {
//   serviceAPI.get(url, {
//     params: data
//   }, {
//     headers: headers
//   }).then(res => {
//     success(res);
//   }).catch(err => {
//     fail(err);
//   })
// }

// const servicePost = (url = '/', data = {}, success = function () {}, fail = function () {}, headers = {}) => {
//   serviceAPI.post(url, {
//     data: data
//   }, {
//     headers: headers
//   }).then(res => {
//     success(res);
//   }).catch(err => {
//     fail(err);
//   })
// }

// const serviceAPI = axios.create({
//   timeout: 5000 // request timeout
// });
// // Add a request interceptor
// serviceAPI.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // Add a response interceptor
// serviceAPI.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response;
// }, function (error) {
//   // Do something with response error
//   return Promise.reject(error);
// });

// module.exports.default = module.exports = (options = {
//   url: '/',
//   method: 'get',
//   data: {},
//   success: function () {},
//   fail: function () {},
//   headers: {}
// }) => {
//   let {
//     url,
//     method,
//     data,
//     headers,
//     success,
//     fail
//   } = options;
//   method === 'post' ? servicePost(url, data, success, fail, headers) : serviceGet(url, data, success, fail, headers);
// }