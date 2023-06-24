var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    let dummy = new NodeList(0);
    dummy.next = head;
    prev = dummy;
    while(head && head.next){
        [prev.next , head.next.next , head.next] = [head.next , prev.next , head.next.next];
        prev = head;
        head = head.next;
    }
return dummy.next;
};