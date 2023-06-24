var replaceElements = function(arr) {
    let greatest = -1;
    for (let i= arr.length - 1 ; i >= 0 ; i--) {
        if (arr[i]  > greatest) {
            let temp = arr[i];
            arr[i] = greatest ; 
            greatest = temp;
        }
        else  {
            arr[i] = greatest;
        }
    }
    return arr;
};
console.log(replaceElements([17, 18, 5, 4, 6, 1]));