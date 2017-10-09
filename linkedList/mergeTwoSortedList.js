//Merge two sorted linked lists and return it as a new list.
//The new list should be made by splicing together the nodes of the first two lists.
// i.e. input: 1 -> 3 -> 5 -> 6 -> NULL; 2 -> 4 -> 7 -> NULL;
// output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> NULL;

//Solution: time complexity - O(n), space complexity- O(1);
// mergin in place, set the list to be the mergedList which start with a smaller value;
// iterate the other list, once the current node A is smaller than the node B in the mergedList,
// then insert node A into the mergedList
// finally return the mergedList
const mergeTwoLists = (l1, l2) => {
    if(l1===null && l2===null){
        return null;
    }
    if(l1 === null || l2===null){
        return l1 || l2;
    }
    let mergeTo = l1.val < l2.val? l1 : l2;
    let mergeFrom = l1.val >= l2.val? l1 : l2;

    let current = mergeTo;
    let pointer = mergeFrom;

    while (pointer){
      if(current.next === null){
        current.next = pointer;
        break;
      } else if(current.next.val < pointer.val){
        current = current.next;
      } else {
        let temp = current.next;
        current.next = pointer;
        pointer = pointer.next;
        current.next.next = temp;
      }
    }

    return mergeTo;

};
