var missingNumber = function(nums) {
    const n = nums.length ; 
    const exsum = (n* (n+1)) / 2;
    const actualsum = nums.reduce((sum,num)=> num + sum , 0);

    return exsum - actualsum ;
}
console.log(missingNumber([1,0,3]));