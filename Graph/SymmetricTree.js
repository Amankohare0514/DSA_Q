var isSymmetric = function(root) {
    if(!root.left && !root.right){
        return true;
    }
    function system(left1, right1){
        if(!left1 && !right1){
            return true;
        }
        if (!left1 || !right1) {
            return false  
        }
        return left1.val == right1.val && system(left1.left , right1.right) && system(left1.right . right1.left);
 
    }
    return system(root.left , root.right)
}