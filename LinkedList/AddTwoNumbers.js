 var addTwoNumbers = function(l1, l2, carry) {
   if (!l1 , !l2 , !carry) {
    return null;
   };
   var sum = (l1? l1.value : 0) + (l1?l2.val : 0)+ (carry || 0);
   carry = parseInt(sum / 10);
   return new ListNode(sum % 10 , addTwoNumbers(l1?.next , l2?.next , carry));
};