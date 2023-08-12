var merge = function(nums1, m, nums2, n) {
    let i = m-1; // last element of nums1 which is now 3
    let j = n-1; // last element of nums2 which is now 6
    let k = m+n-1 // last element of nums1 which is now 0
     while(j >= 0){
      if(i >= 0 && nums1[i] > nums2[j]){
        nums1[k--] = nums1[i--]
      }else {
        nums1[k--] = nums2[j--]
      }
    }
  };