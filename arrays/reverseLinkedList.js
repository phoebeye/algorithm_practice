// reverse LinkedList
// function NodeList = (val){
//   this.val = val;
//   this.next = null;
//}

//Solution: iterate the LinkedList and have each node point to the current head, update current head each time;
// O(n);
var reverseLinkedList = (head) {
  if(head === null || head.next === null){
    return head;
  }
  let pointer = head;
  let currentHead = head;
  while(pointer.next){
    let newHead = pointer.next;
    newHead.next = currentHead;
    currentHead = newHead;
  }
  return currentHead;
}

//Question_2: If a LinkedList is a palindrome:
//Solution: reverse the first half and compare with the second half;
