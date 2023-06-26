
var singleNumber = function (nums) {
    // return nums.reduce((a, b) => a ^ b);
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
      num ^= nums[i]; // num = num ^ nums[i];
    }
    return num;
  };