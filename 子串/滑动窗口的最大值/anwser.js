/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0 || k === 0) return [];
  if (k === 1) return nums;

  const ans = [];
  const deque = []; // 存储索引，保持递减顺序

  for (let i = 0; i < nums.length; i++) {
    // 移除队列中所有小于当前元素的索引（保持递减）
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);

    if (i - deque[0] >= k) {
      deque.shift();
    }

    // 当窗口形成后（i >= k-1），记录最大值
    if (i >= k - 1) {
      ans.push(nums[deque[0]]);
    }
  }

  return ans;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
