var kthSmallest = function(root, k) {
    let result = [];
    let current = root;
    function traverse(node){
        if(node.left) traverse(node.left);
        result.push(node.val);
        if(node.right) traverse(node.right)
    }
    traverse(current)
    return result[k-1]
};