var invertTree = function(root) {
    if(root == null){
        return null
    };
    const r = invertTree(root.right);
    const l = invertTree(root.left);
   root.left = r;
  root.right = l;
    return root
 }