import store from './BaseStore.js';

module.exports = {
  testAjax() {
    return store.ajax("get", {
      apiName: 'getMongoConfig',
      params: {

      },
    });
  },
};
