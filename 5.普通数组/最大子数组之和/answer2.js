// 动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = -Infinity;
  let f = 0;
  for (const x of nums) {
    f = Math.max(f, 0) + x;
    ans = Math.max(ans, f);
  }
  return ans;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
