var findUnion = function (arr1, arr2, n, m) {
    let arr = [...arr1, ...arr2];
    arr.sort((a, b) => a - b);
    let ans = [];
    ans[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] != ans[ans.length - 1]) {
        ans.push(arr[i]);
      }
    }
    return ans;
  };
  
  console.log(findUnion([1, 2, 3, 4, 5], [1, 2, 3], 5, 3));