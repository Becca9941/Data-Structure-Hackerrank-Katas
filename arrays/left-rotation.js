function leftRotation(a,d) {
  const first = a.shift();
  a.push(first);
  return a;
}

module.exports = leftRotation;
