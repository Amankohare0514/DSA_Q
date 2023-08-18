var goodNodes = function(root) {
    const countgoodnode = ( node , maxSofor)=>{
        if(!node) return 0;
        const newMax = Math.max(maxSofor , node.val)
        let count = 0;
        if(node.val >= maxSofor){
            count =1;
        }
        count += countgoodnode(node.left , newMax);
        count += countgoodnode(node.right , newMax);
        return count;
    }
    return countgoodnode(root , root.val)
};