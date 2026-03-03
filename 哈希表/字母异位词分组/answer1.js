/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const m = new Map();
  for (const s of strs) {
    const sortedS = s.split("").sort().join("");
    if (!m.has(sortedS)) {
      m.set(sortedS, []);
    }
    m.get(sortedS).push(s);
  }
  return Array.from(m.values());
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let answer = groupAnagrams(strs);
console.log(answer);
