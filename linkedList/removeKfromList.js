// Given a singly linked list of integers l and an integer k,
//remove all elements from list l that have a value equal to k.


//Solution: create a pointer as previous node of head so that can return pointer.next;
// another pointer as previous node of current node which we exam if it has target value;
// time complexity: O(n)
// space: O(n)

const ListNode (val) => {
  this.value = val;
  this.next = null;
}

const removeTargetFromList = (node, target) => {
  let beforeHead = new ListNode(0);
  beforeHead.next = node;
  let previous = beforeHead;
  while(previous.next) {
    if(previous.next.value === target){
      let next = previous.next.next;
      previous.next = next;
    } else {
      previous = previous.next;
    }
  }


  return beforeHead.next;
}
