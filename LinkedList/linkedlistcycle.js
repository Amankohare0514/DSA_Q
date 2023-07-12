var hasCycle = function(head) {
    function run(fast,slow){
        if(!fast || !fast.next) return false;
        if(fast.next === slow) return true;
        return run(fast.next.next , slow.next);
    }
    return run(head , head)
};