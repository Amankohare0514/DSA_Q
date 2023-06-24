// 1 additonal array
var rotate = function (nums, k) {
	const rotated = new Array(nums.length);
	for (let i = 0; i < nums.length; i++) {
		rotated[(i + k) % nums.length] = nums[i]; ///  3 4 5 67 1 2
	}
	for (let i = 0; i < nums.length; i++) {
		nums[i] = rotated[i];
	}
	return nums;
};

// var rotate = function (k , nums){
//     k = k % nums.length;
//     reverse(nums , 0 , nums.length);
//     reverse(nums , 0 , k-1);
//     reverse(nums , k , nums.length)
// };

// function rotate(nums , end, start)
// {
//     while(start < end){
//         let temp = nums[start];
//         nums[start]=nums[end];
//         nums[end]=temp;
//         start ++;
//         temp--;
//     }
//     return nums;
// }
console.table(rotate([1, 2, 3, 4, 5, 6, 7], 3));