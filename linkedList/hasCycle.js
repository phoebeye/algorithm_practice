// Given a linkedlist, determine whether it has cycle
// try to solve it without extra space
var hasCycle = function(head) {
    if(head === null || head.next === null){
        return false;
    }
    let slow = head;
    let fast = head.next;
    while(slow !== fast){
        if(!fast.next || !fast.next.next){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
