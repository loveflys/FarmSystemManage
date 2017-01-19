import store from './BaseStore.js';

module.exports = {
  testAjax(id) {
    return store.ajax("get", {
      apiName: 'getMongoConfig',
      params: {
        
      },
    });
  },
};
