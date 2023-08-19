var levelOrder = function(root) {
    if(!root) return [];
    let result = [];
function traverse(node , level){
if(!node) return ;
if(result.length <= level){
    result.push([]);
}
result[level].push(node.val);
traverse(node.left  ,level+1);
traverse(node.right , level+1)
};
traverse(root , 0)
    return result;
};