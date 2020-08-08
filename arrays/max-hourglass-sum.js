function maxHourglassSum(arr) {
  const hourglassTopSums = [];
  const hourglassTop = arr[0];

  hourglassTopSums.push(sum(hourglassTop));

  return hourglassTopSums;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

module.exports = maxHourglassSum;
