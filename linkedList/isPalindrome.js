//Given a singly linked list of integers, determine whether or not it's a palindrome.
//note: solve this task in O(n) time using O(1) additional space, where n is the number of elements in l
//Solution: find the mid point of the linked list; reverse the second half and compare if the first half and reversed second half are symmetric;
function isListPalindrome(l) {

    /// reverse the second half list
    const reverseList = (node) => {
      if(node.next === null) {
        return node;
      }
      let oldHead = node;
      let newHead;

      while(node.next){
        newHead  = node.next;
        node.next = node.next.next;
        newHead.next = oldHead;
        oldHead = newHead;
      }
      return newHead;
    }


    // handle nodeList with less than three nodes
    if(l === null) {
        return true;
    }

    if(l.next === null){
        return true;
    }

    if(l.next.next === null){
        if(l.value === l.next.value){
            return true;
        } else {
            return false;
        }
    }

    // if nodeList has at least 3 nodes, find the mid-point
    let slow = l;
    let fast = l;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let midPoint = slow.next;
    let head = l;
    let reverseHalf = reverseList(midPoint);
    midPoint = reverseHalf;
    while(midPoint.next){
        if(head.value !== midPoint.value){
            return false;
        } else {
            head = head.next;
            midPoint = midPoint.next;
        }
    }

    return true;
}
