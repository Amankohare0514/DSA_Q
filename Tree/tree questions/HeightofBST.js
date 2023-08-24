class Solution {
    //Function to find the height of a binary tree.
    height(node)
    {
        if(!node) return 0;
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight , rightHeight) + 1;
    }
}


//gfg