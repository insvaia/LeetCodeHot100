// 滑动窗口
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let left = 0;
  let st = new Set();
  for (let right = 0; right < s.length; right++) {
    while (st.has(s[right])) {
      st.delete(s[left]);
      left++;
    }
    st.add(s[right]);
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

let s = "abcabcbb";
let result = lengthOfLongestSubstring(s);
console.log(result);
