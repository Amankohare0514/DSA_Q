var divide = function(dividend, divisor) {
    let max = (2 ** 31) - 1 ; 
    let min = ((-2) ** 31) ;
    let product = Math.trunc(dividend/divisor);
    if(product > min && product < max){
        return product ;
    }
    else if(product >= max){
        return max;
    }
    else return min;
};