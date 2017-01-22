import config from '../config.js';
import Vue from 'Vue';
import VueResource from 'vue-resource';
import cookie from '../../src/common/cookie';
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

module.exports = {
  ajax(method, options) {
    let path = config.SERVER_PATH;
    for (let item in options.params) {
      if (typeof(options.params[item]) === "object") {
        options.params[item] = JSON.stringify(options.params[item]);
      }
    }
    if (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') {
      return Vue.http[method](path + options.apiName, { params: options.params, headers: { token: cookie.get("token")+'' } });
    } else {
      return Vue.http[method](path + options.apiName, options.params, { headers: { token: cookie.get("token")+'' } });
    }
  },
};

// Vue.http.interceptors.push((request, next) => {
//   request["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
//   next((response) => {
//     if(response.body.code == '060') {
//       alert("您的账号在异地登录。");
//     }
//   });
// });
