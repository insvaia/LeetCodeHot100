// 排序 时间复杂度O(nlogn)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let max = 1;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    let cur = i,
      next = i + 1;
    if (nums[cur] === nums[next]) continue;
    if (nums[cur] + 1 === nums[next]) {
      count++;
    } else {
      count = 1;
    }
    max = Math.max(max, count);
  }
  return max;
};

let nums = [100, 4, 200, 1, 3, 2];
let result = longestConsecutive(nums);
console.log(result);
