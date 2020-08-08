function maxHourglassSum(arr) {
  let hourglassSums = [];
  for(let row = 0; row < arr.length-2; row++) {
    for(let col = 0; col < arr[row].length-2; col++) {
      let top = arr[row][col] + arr[row][col+1] + arr[row][col+2];
      let middle = arr[row][col+1];
      let bottom = arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2];

      hourglassSums.push(sum([top + middle + bottom]));
    }
  }
  return Math.max(hourglassSums);
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

module.exports = maxHourglassSum;
