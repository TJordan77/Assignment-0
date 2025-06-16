class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    function search(left, right) {
      if (left > right) {
        return false;
      }

      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return true;
      } else if (nums[mid] > target) {
        return search(left, mid - 1);
      } else {
        return search(mid + 1, right);
      }
    }

    return search(0, nums.length - 1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
