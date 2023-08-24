var findSecondMinimumValue = function(root) {
    if(!root.left) return -1;
    let right = findSecondMinimumValue(root.right)
    let left = findSecondMinimumValue(root.left)

    if (root.left.val > root.val) {
    if (right >= 0) return Math.min(root.left.val, right);
    return root.left.val;
  }
  if (root.right.val > root.val) {
    if (left >= 0) return Math.min(root.right.val, left);
    return root.right.val;
  }
  if (left >= 0 && right >= 0) return Math.min(left, right);
  return Math.max(left, right);
};