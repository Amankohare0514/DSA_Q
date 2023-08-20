class Solution {
    // Function to convert a binary tree into its mirror tree.
    mirror(node) {
        if(!node) return null ;
       const temp = node.left;
       node.left = node.right;
      node.right = temp;
       this.mirror(node.left);
       this.mirror(node.right);
       return node
}
}
//gfg questions