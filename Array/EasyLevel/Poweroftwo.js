var isPowerOfTwo = function(n) { 
    if (n <= 0) return false;
    if ((n & (n-1)) === 0) {
        return true ;
    }
    else return false;
}
console.log(isPowerOfTwo(3));