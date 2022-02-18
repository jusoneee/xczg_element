import xczg_test from './src/test';

xczg_test.install = function(Vue) {
  Vue.component(xczg_test.name, xczg_test);
};

export default xczg_test;
