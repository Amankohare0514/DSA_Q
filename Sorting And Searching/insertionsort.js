function insertionSort(nums) {
    for(let i=1 ; i<nums.length ; i++){
        let currentval = nums[i];
        let j;
    for(j=i-1; j>= 0 && currentval < nums[j]; j--){
        nums[j+1] = nums[j];
    }
    nums[j+1] = currentval;
}
return nums;
}
console.log(insertionSort([2, 1, 3, 7]));