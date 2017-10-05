// delete node from linkedlist with only access to the node that need to be deleted, except the tail;

const deleteNode = (node) => {
  if(node.next === null){
    return;
  }
  let nextNode = node.next.next;
  // copy the next node
  node.val = node.next.val;
  node.next = nextNode;
  // release the next node
  node.next.next = null;
}
