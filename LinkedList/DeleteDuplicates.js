var deleteDuplicates = function(head) {
    if(head == null || head.next == null ) return head;
    let current = head;
    while(current != null && current.next != null ){
        if(current.val == current.next.val){
            current.next = current.next.next
    }
    else{
        current=  current.next
    }
    }
    return head;
    }