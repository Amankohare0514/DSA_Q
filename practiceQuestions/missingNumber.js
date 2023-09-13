var missingNumber = function(nums) {
    const n = nums.length ; 
    const exsum = (n * (n+1)) / 2; //45
    const actualsum = nums.reduce((sum,num) => sum + num , 0);

    return exsum  - actualsum;
    
};