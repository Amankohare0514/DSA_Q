// we will create dummy node
// while (until the list becomes null)
//  comparing list1 and list2 if value of list 1 is smaller, we set current.next to list1
//  comparing list1 and list2 if value of list 2 is bigger, we set current.next to list2
// return dummy node


var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy ;
    while (list1 !== null && list2 !== null){
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list1.next;
        }
        current = current.next;
    }
    if (list2 !== null) {
        current.next = list2;
    }
    if (list1 !== null) {
        current.next = list1;
    }
    
    return dummy.next ;
};