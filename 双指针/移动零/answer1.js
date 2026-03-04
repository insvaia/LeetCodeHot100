// 压栈法

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let size = 0;
  for (const x of nums) {
    if (x !== 0) {
      nums[size] = x;
      size++;
    }
  }
  return nums.fill(0, size);
};

let nums = [0, 1, 0, 3, 12];
let result = moveZeroes(nums);
console.log(result);
