/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let pre = 0;
  let ans = 0;
  const mp = new Map();
  mp.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i];
    if (mp.has(pre - k)) {
      ans += mp.get(pre - k);
    }
    mp.set(pre, (mp.get(pre) || 0) + 1);
  }
  return ans;
};

console.log(subarraySum((nums = [1, 1, 1]), 2));
