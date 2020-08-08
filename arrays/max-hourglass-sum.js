function maxHourglassSum(arr) {
  return arr[0].reduce((a, b) => a + b, 0);
}

module.exports = maxHourglassSum;
