var isPalindrome = function(x) {
    var result = Number(String(x).split('').reverse().join('')) 
    if(result == x){
        return true;
    }
    else {
        return false;
    }
 };