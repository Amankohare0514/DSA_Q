var increasingTriplet = function(nums) {
    let fnum = Infinity;
    let snum = Infinity;
    for(let i=0; i<nums.length; i++){
        if(nums[i] <= fnum){
            fnum = nums[i];
        }
        else if(nums[i] <= snum){
            snum = nums[i];
        }
        else {
            return true
        }
    }
    return false
};