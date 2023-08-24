var rightSideView = function(root){
    let result = [];
    function traverse(node ,level){
        if(!node) return ;
        if(result.length === level){
            result.push(node.val)
        }
        traverse(node.right , level+1)
        traverse(node.left , level+1)
    }
    traverse(root , 0)
    return result;
};