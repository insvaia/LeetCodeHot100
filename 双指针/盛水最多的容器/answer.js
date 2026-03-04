/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    ans = Math.max(ans, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let result = maxArea(height);
console.log(result);
