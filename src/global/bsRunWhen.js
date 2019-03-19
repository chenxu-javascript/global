const bsRunWhen = function(fn, cod, name) {
  name = name || "";
  if (cod()) {
    fn();
    return;
  }

  var i = 0;
  var interval = setInterval(function() {
    i++;
    if (i > 500) {
      clearInterval(interval);
      /* eslint-disable */
      if (window.ZBJConfig.isDev) {
        console.log(name, ':', 'bsRunwhern timeout')
      }
    } else if (cod()) {
      fn()
      clearInterval(interval)
    }
  }, 30)
}

export default bsRunWhen
