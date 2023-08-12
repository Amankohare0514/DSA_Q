//gfg
class Solution {
    pushZerosToEnd(arr,n){
        //code here
        let j = 0;
        let temp;
        
        for(let i = 0; i < n; i++) {
            
            if(arr[i] != 0){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j++;
            }
        }
        return arr;
    }
}

//leetcode
var moveZeroes = function(nums) {
    let left = 0;
    let right = 0;
    while(left < nums.length){
        if(nums[left] !==0){
           [nums[left] , nums[right]] = [nums[right] , nums[left]];
            right++
        }
        left++
    }
};

