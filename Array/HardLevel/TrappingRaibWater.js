var trap = function (height) {
  let  totalwater = 0;
  for(let i=0; i<height.length; i++){
    let leftMax=0;
    let rightMax=0;
  //left side calculate
  for(let j=0; j<=i; j++){
    leftMax = Math.max(leftMax , height[j])
  }

  //right side
  for(let j=i; j<height.length; j++){
    rightMax = Math.max(rightMax , height[j])
  }

  //calculate total
  totalwater = totalwater + Math.min(leftMax , rightMax) - height[i];
  }
  return totalwater
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9