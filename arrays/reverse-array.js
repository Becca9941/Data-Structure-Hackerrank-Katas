function reverseArray(a) {
  let reversed = [];
  a.forEach(function(x) {
    reversed.unshift(x);
  });
  return reversed;
}

module.exports = reverseArray;
