// 定义链表节点类
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 从数组创建链表
function createLinkedList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// 创建测试数据
let listA = createLinkedList([4, 1, 8, 4, 5]);
let listB = createLinkedList([5, 6, 1]);

// 让 listB 与 listA 在值为 8 的节点处相交
let intersectNode = listA.next.next; // 值为 8 的节点
let lastNodeB = listB;
while (lastNodeB.next) {
  lastNodeB = lastNodeB.next;
}
lastNodeB.next = intersectNode; // 连接相交点

var getIntersectionNode = function (headA, headB) {
  let A = headA;
  let B = headB;
  while (A !== B) {
    A = A === null ? headB : A.next;
    B = B === null ? headA : B.next;
  }
  return A;
};

// 测试相交节点
let intersection = getIntersectionNode(listA, listB);
console.log(intersection ? intersection.val : null); // 输出: 8
