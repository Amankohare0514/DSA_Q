var oddEvenList = function(head) {
    if(!head || !head.next){
        return head;
    }
        // first of all we initilize three  pointer
        let odd = head;
        let even = head.next;
        let evenhead = even;

        while(even && even.next){
           odd.next = even.next;
           odd = odd.next;
           even.next = odd.next;
           even = even.next;
    }
    odd.next = evenhead;
    return  head;
};