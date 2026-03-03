// 哈希表
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const st = new Set(nums);
  let ans = 0;
  for (const x of st) {
    if (st.has(x - 1)) {
      continue;
    }
    let y = x + 1;
    while (st.has(y)) {
      y++;
    }
    ans = Math.max(ans, y - x);
  }
  return ans;
};

let nums = [100, 4, 200, 1, 3, 2];
let result = longestConsecutive(nums);
console.log(result);
