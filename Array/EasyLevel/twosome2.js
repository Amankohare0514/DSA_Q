var twoSum = function(numbers, target) {
    let n = numbers.length;
    let start = 0;
    let end = n-1;
    while(start<end){
        let sum = numbers[start]+numbers[end];
        if(sum == target){
        start++;
        end++;
        return [start,end];
    }
   else if(sum>target){
       end--;
   }
   else{
        start++;
    }
    }
};

//two pointer