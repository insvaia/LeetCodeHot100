// 哈希自己研究的

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);
  nums.unshift(0);
  const st = new Set(nums);
  for (const x of st) {
    if (!st.has(x + 1) && x + 1 > 0) {
      return x + 1;
    }
  }
};

console.log(firstMissingPositive([1, 2, 0]));
// 改进版
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var firstMissingPositive = function(nums) {
//     const set = new Set(nums);
//     let i = 1;

//     while (set.has(i)) {
//         i++;
//     }

//     return i;
// };
