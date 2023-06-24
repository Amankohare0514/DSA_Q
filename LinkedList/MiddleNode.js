var middleNode = function (head) {
    let slow = head ; 
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next; //at a time
        fast . fast.next.next //fast will coverd two todes
        //also fast do node aage chla jaega
    }
    return slow; //to apn return slwo krenge kyuki fast to aage chla gya
}