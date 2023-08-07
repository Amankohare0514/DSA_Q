class Solution {
    //Function to find the height of a binary tree.
    height(node)
    {
        if(!node) return 0;
        let leftheight = this.height(node.left)
        let rightheight = this.height(node.right)
        return Math.max(leftheight , rightheight) +1;
    }
}

//gfg