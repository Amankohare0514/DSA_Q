var minDepth = function(root) {
    if(root == null) return 0;
    if(root.left == null) return minDepth(root.right) +1;
    if(root.right == null) return minDepth(root.left) +1;
    return 1+ Math.min(maxDepth(root.left) , maxDepth(root.right));
    }