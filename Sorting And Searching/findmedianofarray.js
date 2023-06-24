var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2);
    let length = nums.length;
    nums.sort((a,b)=> {return a-b});
    if (length%2 ===1) {
        return nums[(length-1)/2];
    }
    return (nums[length/2-1] + nums[length/2])/2;
};