function countOfAllIndexMatchingNumbers(nums) {
  return nums.filter((num, index) => num === index).length;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
