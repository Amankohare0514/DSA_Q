class Solution {
    //Function to check if two trees are identical.
    isIdentical(root1, root2)
    {
        if(!root1 && !root2) return true;
        if(!root1 || !root2) return false;
        return (
            root1.data === root2.data &&
            this.isIdentical(root1.left , root2.left) &&
            this.isIdentical(root1.right , root2.right)
            );
    }
}