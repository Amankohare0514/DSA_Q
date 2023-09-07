var maxOperations = function(nums, k) {
    nums.sort((a,b)=> a-b)
    let operations = 0;
    let left = 0;
    let right = nums.length-1;
    while(left<right){
        let sum = nums[left] + nums[right];
        if(sum == k){
            operations++;
            left++;
            right--
        }
        else if(sum>k) right--
        else left++
    }
    return operations
};