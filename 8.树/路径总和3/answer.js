/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const prefixSumMap = new Map();
  // 初始化：前缀和为0的路径数为1（处理从根节点开始的路径）
  prefixSumMap.set(0, 1);

  function dfs(node, curSum) {
    if (!node) return 0;
    curSum += node.val;
    // 核心：当前前缀和 - targetSum 存在，则说明有路径和为targetSum
    let count = prefixSumMap.get(curSum - targetSum) || 0;
    // 更新当前前缀和的计数
    prefixSumMap.set(curSum, (prefixSumMap.get(curSum) || 0) + 1);
    // 递归遍历左右子树
    count += dfs(node.left, curSum);
    count += dfs(node.right, curSum);
    // 回溯：恢复哈希表（避免影响其他分支）
    prefixSumMap.set(curSum, prefixSumMap.get(curSum) - 1);
    return count;
  }

  return dfs(root, 0);
};
