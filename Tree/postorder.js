var postorderTraversal = function(root) {
    let result=[];
    function postorder(root){
       if(!root) return ;
       postorder(root.left)
       postorder(root.right)
       result.push(root.val)
    }
    postorder(root)
    return result 
};