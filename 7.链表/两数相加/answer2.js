/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const ans1 = [];
  const ans2 = [];

  // 分别收集两个链表的数字
  while (l1) {
    ans1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    ans2.push(l2.val);
    l2 = l2.next;
  }

  // 注意：链表是逆序存储的，需要反转
  const num1 = BigInt(ans1.reverse().join(""));
  const num2 = BigInt(ans2.reverse().join(""));
  const sum = num1 + num2;

  // 将结果转为数组（仍然是逆序）
  const result = sum.toString().split("").reverse().map(Number);

  // 构建链表
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of result) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
};
