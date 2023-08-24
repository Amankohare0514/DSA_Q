var kthSmallest = function(root, k) {
    let result = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        result.push(node.val);
        if(node.right) traverse(node.right)
    }
    traverse(root)
    return result[k-1]
};