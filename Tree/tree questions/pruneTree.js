var pruneTree = function(root) {
    if(root.left) root.left = pruneTree(root.left);
    if(root.right) root.right = pruneTree(root.right);
     if(!root.left && !root.right && root.val ===0 ) return null;
    return root
};