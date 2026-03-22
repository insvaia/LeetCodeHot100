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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ans = [];

  const help = (root) => {
    if (!root) {
      return;
    }

    help(root.left);
    ans.push(root.val);
    help(root.right);
  };
  help(root);
  return ans[k - 1];
};
