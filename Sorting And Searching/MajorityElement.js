var majority = function (nums, size) {
let sol= 0;
let cnt=0 ;
for(let i=0; i<nums.length ; i++){
  if (sol == 0) {
    sol = nums[i];
    cnt = 1;
  }
  else if (sol == nums[i]) {
   cnt++
  }
  else {
    cnt--;
  }
}
return sol;
}
  console.log(majority[3,2,3]);