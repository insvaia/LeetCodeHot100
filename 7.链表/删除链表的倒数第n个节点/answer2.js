/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建虚拟头节点，简化边界情况处理
  const dummy = new ListNode(0, head);

  // 第一次遍历：计算链表长度
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  // 找到要删除节点的前一个节点
  current = dummy;
  let targetIndex = length - n;
  let count = 0;

  while (count < targetIndex) {
    current = current.next;
    count++;
  }

  // 删除节点
  current.next = current.next.next;

  return dummy.next;
};
