var isBalanced = function(root) {
    if(root == null) return true;
    if(Height(root)==-1) return false;
    return true;
    function Height(root) {
        if(root==null) return 0;
        let leftHeight = Height(root.left);
        let rightHeight = Height(root.right);
        if(leftHeight == -1 || rightHeight == -1 ) return -1;
        if(Math.abs(leftHeight - rightHeight) > 1) return -1;
        return Math.max(leftHeight , rightHeight) +1
    }
};