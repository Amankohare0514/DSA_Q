var largestValues = function(root) {
    let result= {};
    function  recursion(root , i=0){
    if(!root) return null;
    result[i] = Math.max(result[i] == 0 ? 0 :result[i] || -Infinity ,root.val);
    recursion(root.left , i+1);
    recursion(root.right , i+1);
    }
    recursion(root);
    return Object.values(result);
    };