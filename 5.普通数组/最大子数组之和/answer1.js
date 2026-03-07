// 前缀和
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = -Infinity;
  let minPre = 0;
  let pre = 0;
  for (const x of nums) {
    pre += x;
    ans = Math.max(ans, pre - minPre);
    minPre = Math.min(minPre, pre);
  }
  return ans;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
