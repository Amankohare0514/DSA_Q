var minDiffInBST = function(root) {
    let minDiff = Infinity;
    let prev = null;
    function inordertraverse(node){
if(!node) return ;
inordertraverse(node.left);
if(prev !== null) {
minDiff = Math.min(minDiff , node.val - prev);
}
prev = node.val;
inordertraverse(node.right)

    }
    inordertraverse(root)
    return minDiff
};