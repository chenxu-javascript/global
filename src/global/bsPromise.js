const bsPromise = function(data, time) {
  return new Promise(function(resolve) {
    if (time) {
      setTimeout(function() {
        resolve(data);
      }, time || 1);
    } else {
      resolve(data);
    }
  });
};

export default bsPromise;
