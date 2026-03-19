/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function dfs(left, right) {
    if (left === right) {
      return null;
    }

    const m = Math.floor((left + right) / 2);
    return new TreeNode(nums[m], dfs(left, m), dfs(m + 1, right));
  }
  return dfs(0, nums.length);
};
