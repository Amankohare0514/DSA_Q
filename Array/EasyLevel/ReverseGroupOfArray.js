// var reverseGroupArray = function(arr, n, k){
//     for(let i=0 ; i<n ; i += k){
//         let left = 0;
//         let right = Math.min(i+k-1 , n-1);
//         if (left < right) {
//             let temp = arr[right];
//             arr[right] = arr[left];
//             arr[left] = temp;
//             left++ ; 
//             right --
//         }
//     }
// };
// console.log(reverseGroupArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 3));
class Solution {
    //Function to reverse every sub-array group of size k.
    reverseInGroups(arr, n, k){
    for(let i=0 ; i<n ; i += k){
        let left = 0;
        let right = Math.min(i+k-1 , n-1);
        if (left < right) {
            let temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left++ ; 
            right --;
        }
    }
}
};