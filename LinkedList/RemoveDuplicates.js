var RemoveDuplicates = function (head) {
    let current = head ; 
    while (current !== null && current.next !== null) {
        if (current.val == current.next) {
            current.next = current.next.next
        }
        else {
            current = current.next;
        }
    }
    return head ;
}
//leetcode pr glt bta rha isko dekhte bad me
