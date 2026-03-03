// 暴力解法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  for (let i = 0; ; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
let answer = twoSum(nums, target);
console.log(answer);
