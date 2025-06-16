function pairSum(nums, target) {
  if (nums.length < 2) {
    throw new Error("Input array must have at least two elements.");
  }

  const seen = new Set();

  for (let num of nums) {
    let complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;
