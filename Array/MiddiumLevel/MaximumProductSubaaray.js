var maxProduct = function(nums) {
    let result = nums[0]
    let currMax = nums[0]
    let currMin = nums[0]
    for (let i=1; i<nums.length; i++) {
        let localMax = Math.max(currMax * nums[i], nums[i], currMin * nums[i])
        let localMin = Math.min(currMax * nums[i], nums[i], currMin * nums[i])
        currMax = Math.max(localMax, localMin)
        currMin = Math.min(localMax, localMin)
        result = Math.max(result, currMax)
    }
    return result 
};