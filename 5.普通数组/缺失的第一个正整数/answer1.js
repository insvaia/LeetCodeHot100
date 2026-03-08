var firstMissingPositive = function (nums) {
  const n = nums.length;

  // 第一步：将负数和非范围内的数替换为 n+1
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = n + 1;
    }
  }

  // 第二步：使用索引标记存在的数字
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (num <= n) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }

  // 第三步：找到第一个正数索引
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return n + 1;
};

console.log(firstMissingPositive([1, 2, 0]));
