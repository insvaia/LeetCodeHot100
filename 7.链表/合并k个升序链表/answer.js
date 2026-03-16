/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const m = lists.length;
  if (m === 0) {
    return null;
  }

  for (let step = 1; step < m; step *= 2) {
    for (let i = 0; i < m - step; i += step * 2) {
      lists[i] = merge(lists[i], lists[i + step]);
    }
  }

  return lists[0];
};

var merge = function (l1, l2) {
  const dummy = new ListNode();
  let prev = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  prev.next = l1 ? l1 : l2;

  return dummy.next;
};
