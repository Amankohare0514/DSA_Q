var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let result1 = [];
    let result2 = [];
    for(let num of [...set1 , ...set2]){
        if(!set2.has(num)){
            result1.push(num)
        }
        if(!set1.has(num)){
            result2.push(num)
        }
    }
    return [result1 , result2]
};