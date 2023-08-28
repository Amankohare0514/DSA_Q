var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q || p.val !== q.val) return false;
    return p.val == q.val && isSameTree(p.left , q.left) && isSameTree(p.right , q.right)
}

//this is same tree which also asked in tree 
