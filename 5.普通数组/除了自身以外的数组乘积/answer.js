/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const suf = Array(n);
  suf[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suf[i] = suf[i + 1] * nums[i + 1];
  }

  let pre = 1;
  for (let i = 0; i < n; i++) {
    // 此时 pre 为 nums[0] 到 nums[i-1] 的乘积，直接乘到 suf[i] 中
    suf[i] *= pre;
    pre *= nums[i];
  }

  return suf;
};

console.log(productExceptSelf([1, 2, 3, 4]));
