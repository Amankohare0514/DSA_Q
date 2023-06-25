var findNonMinOrMax = function(nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    for(let i=0; i<nums.length; i++){
        if(max>nums[i] && nums[i]>min){
            return nums[i]
        }
    }
    return -1;
};
console.log(findNonMinOrMax([3,2,1,4]));