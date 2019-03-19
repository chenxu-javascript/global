import bsPromise from "./bsPromise.js";

const bsWait = function(time) {
  return bsPromise({}, time);
};

export default bsWait;
