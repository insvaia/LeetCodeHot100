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
 * @return {boolean}
 */
var isValidBST = function (root, left = -Infinity, right = Infinity) {
  if (!root) {
    return true;
  }

  const x = root.val;
  return (
    left < x &&
    x < right &&
    isValidBST(root.left, left, x) &&
    isValidBST(root.right, x, right)
  );
};
