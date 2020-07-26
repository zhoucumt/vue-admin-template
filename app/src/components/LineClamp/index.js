import lineClamp from './lineClamp.js';

export default {
  install(Vue) {
    Vue.directive('lines', lineClamp);
  },
};
