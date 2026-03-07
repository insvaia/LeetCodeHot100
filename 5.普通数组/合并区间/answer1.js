//以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];
  for (const x of intervals) {
    const m = ans.length;
    if (m && x[0] <= ans[m - 1][1]) {
      ans[m - 1][1] = Math.max(ans[m - 1][1], x[1]);
    } else {
      ans.push(x);
    }
  }
  return ans;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
);
