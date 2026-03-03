// 哈希表法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const idx = new Map();
  for (let i = 0; ; i++) {
    const x = nums[i];
    if (idx.has(target - x)) {
      return [idx.get(target - x), i];
    }
    idx.set(x, i);
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
let answer = twoSum(nums, target);
console.log(answer);
