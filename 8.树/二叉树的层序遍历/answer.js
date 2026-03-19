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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = [];
  let queue = [];
  queue.push(root);
  if (root === null) {
    return ans;
  }

  while (!queue.length == 0) {
    let m = queue.length;
    let curLevel = [];
    for (let i = 0; i < m; i++) {
      const node = queue.shift();
      curLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ans.push(curLevel);
  }

  return ans;
};
