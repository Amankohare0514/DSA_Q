var deleteNode = function(node) {
    node.val = node.next.val; // copy value of next node to current node
  node.next = node.next.next; // update next pointer of current node to node after next node 
};
