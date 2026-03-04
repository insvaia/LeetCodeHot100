// 快慢指针
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return nums.fill(0, slow);
};

let nums = [0, 1, 0, 3, 12];
let result = moveZeroes(nums);
console.log(result);
