import bsCheck from "./global/bsCheck.js";
import bsPromise from "./global/bsPromise.js";
import bsWait from "./global/bsWait.js";

import MaxlenCounter from "./components/maxlen-counter.vue";
// 定义我们的插件
const myPlugin = {
  install(Vue) {
    Vue.prototype.bsCheck = bsCheck;
    Vue.prototype.bsPromise = bsPromise;
    Vue.prototype.bsWait = bsWait;

    Vue.component("MaxlenCounter", MaxlenCounter);
  }
};

export default myPlugin;
