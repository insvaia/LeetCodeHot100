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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }

  let res = [];
  let cur = [root];
  while (cur.length) {
    res.push(cur[cur.length - 1].val);
    const nxt = [];
    for (const node of cur) {
      if (node.left) {
        nxt.push(node.left);
      }
      if (node.right) {
        nxt.push(node.right);
      }
    }
    cur = nxt;
  }

  return res;
};
