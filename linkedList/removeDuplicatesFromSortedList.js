// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

//Solution: time complexity-O(n), space complexity-O(1)

const removeDuplicatesFromSortedLinkedList = (head) => {
  if(head === null){
    return head;
  }
  let current = head;
  while(current.next){
    let nextVal = current.next.val;
    if(nextVal !== current.val){
      current = current.next;
    } else {
      current.next = current.next.next;
    }
  }
  return head;
}
