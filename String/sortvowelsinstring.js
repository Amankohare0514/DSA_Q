var sortVowels = function(s) {
    let vowels = "AEIOUaeiou" ,ans = [] , indexes = [] , temp = s.split('');
    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            ans.push(s[i]);
            indexes.push(i);
        }
    }
    if(ans.length === 0) return s;
    ans = ans.sort();
    for(let i=0 ; i<indexes.length ; i++){
        let ind = indexes[i];
        temp[ind] = ans[i]
    }
    return temp.join('')
};