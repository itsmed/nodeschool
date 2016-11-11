
function curryN(fn, n) {
  n = n || fn.length;

  return function currier(argument) {
    if (n <= 1) {
      return fn(argument);
    }
    return curryN(fn.bind(this, argument),  n - 1);
  }

}

module.exports = curryN

