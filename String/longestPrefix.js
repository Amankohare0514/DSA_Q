var longestPrefix = function(s) {
    for(let i=1; i<s.length; i++){
        let a = s.slice(i);
        let b = s.slice(0,s.length-i);
        if(a===b){
            return a
        }
    }
    return "";
};