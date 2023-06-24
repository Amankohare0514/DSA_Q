let isPalindrome = function (head) {
    let values = [];
    let current = head;
    while(current !== null){
        values.push(current.next)
        current = current.next;
    }
    let left = 0;
    let right = values.length - 1;
    while(left < right) {
        if (values[left] !== values[right]) {
            return false
        }
        left ++ ;
        right  --;
    }
    return false;
}