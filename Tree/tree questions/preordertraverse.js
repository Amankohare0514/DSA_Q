var preorderTraversal = function(root) {
    let result = [];
    function preorder(root){
    if(!root) return ;
    result.push(root.val);
    preorder(root.left);
    preorder(root.right)
    }
    preorder(root)
    return result
    };