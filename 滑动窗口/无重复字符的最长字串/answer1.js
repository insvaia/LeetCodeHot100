// 哈希表法

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let map = new Map(); // 存储字符和它的索引
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // 如果字符已存在且在当前窗口内
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1; // 移动左指针到重复字符的下一个位置
    }
    map.set(s[right], right); // 更新字符的最新索引
    ans = Math.max(ans, right - left + 1); // 更新最大长度
  }
  return ans;
};

let s = "abcabcbb";
let result = lengthOfLongestSubstring(s);
console.log(result);
