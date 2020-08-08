function maxHourglassSum(arr) {
  const hourglassTopSums = [];
  const row = arr[0];

  for(let i = 0; i < row.length-2; i++) {
    let hourglassTop = [row[i], row[i+1], row[i+2]];
    hourglassTopSums.push(sum(hourglassTop));
  }


  return hourglassTopSums;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

module.exports = maxHourglassSum;
