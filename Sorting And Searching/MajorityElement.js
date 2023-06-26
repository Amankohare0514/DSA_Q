var majority = function (nums, size) {
    const Map = {};
    const majorityThreshold = Math.floor(size / 2);
  
    for (let i = 0; i < nums.length; i++) {
      const number = nums[i];
      Map[number] = (Map[number] || 0) + 1;
      if (Map[number] > majorityThreshold) {
        return number;
      }
    }
    return -1;
  };
  console.log(majority[3,2,3]);