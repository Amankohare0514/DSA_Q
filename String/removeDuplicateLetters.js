var removeDuplicateLetters = function(s) {
    let result = '';
    for(let i=0; i<s.length; i++){
        const str = s[i];
        if(result.includes(str)) continue;

        while(result.length && result.slice(-1)>str && s.includes(result.slice(-1),i)){
            result = result.slice(0,-1)
        }
        result += str
    }
    return result
};