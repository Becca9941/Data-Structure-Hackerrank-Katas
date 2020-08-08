function maxHourglassSum(arr) {
  const hourglassCapSums = [];
  const row = arr[0];

  for(let i = 0; i < row.length-2; i++) {
    let hourglassCap = [row[i], row[i+1], row[i+2]];
    hourglassCapSums.push(sum(hourglassCap));
  }


  return hourglassCapSums;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

module.exports = maxHourglassSum;
