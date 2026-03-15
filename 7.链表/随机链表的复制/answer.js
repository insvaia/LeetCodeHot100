/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  for (let cur = head; cur; cur = cur.next.next) {
    cur.next = new _Node(cur.val, cur.next, null);
  }

  for (let cur = head; cur; cur = cur.next.next) {
    if (cur.random) {
      cur.next.random = cur.random.next;
    }
  }

  const dummy = new _Node();
  let tail = dummy;
  for (let cur = head; cur; cur = cur.next, tail = tail.next) {
    const copy = cur.next;
    tail.next = copy;
    cur.next = copy.next;
  }

  return dummy.next;
};
