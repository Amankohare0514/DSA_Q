var removeNthFromEnd = function(head, n) {
    var dummy  = new NodeList(0)
    dummy = dummy.next;
    let slow = dummy;
    let fast = dummy;
 for (let i = 0; i <=n ; i++) {
    fast = fast.next;
    slow = slow.next;
 };
 while(fast){
    fast.next = fast.next.next;
 }
 slow = slow.next.next;
 return dummy;
}