/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const cntP = new Array(26).fill(0);
  for (const c of p) {
    cntP[c.charCodeAt() - "a".charCodeAt()]++;
  }
  const ans = [];
  const cntS = new Array(26).fill(0);
  for (let right = 0; right < s.length; right++) {
    cntS[s[right].charCodeAt() - "a".charCodeAt()]++;
    let left = right - p.length + 1;
    if (left < 0) {
      continue;
    }
    // 引入了lodash库
    if (_.isEqual(cntP, cntS)) {
      ans.push(left);
    }
    cntS[s[left].charCodeAt() - "a".charCodeAt()]--;
  }
  return ans;
};

let s = "cbaebabacd";
let p = "abc";
let ans = findAnagrams(s, p);
console.log(ans);
