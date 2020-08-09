function leftRotation(a,d) {
  for(let i = 0; i < d; i++) {
    const first = a.shift();
    a.push(first);
  }
  return a;
}

module.exports = leftRotation;
