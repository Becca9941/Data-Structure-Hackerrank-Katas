function maxHourglassSum(arr) {
  const hourglassSums = [];

  for(let row = 0; row < arr.length-2; row++) {
    for(let col = 0; col < arr[row].length-2; col++) {
      const top = arr[row][col] + arr[row][col+1] + arr[row][col+2];
      const middle = arr[row+1][col+1];
      const bottom = arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2];

      hourglassSums.push(top + middle + bottom);
    }
  }
  return Math.max(...hourglassSums);
}

module.exports = maxHourglassSum;
