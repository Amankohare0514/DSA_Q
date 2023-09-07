var maxVowels = function(s, k) {
    let vowel = ['a' , 'e' , 'i' , 'o' , 'u']
    let count = 0;
    for(let i=0; i<k; i++){
        if(vowel.includes(s[i])){
            count++
        }
    }
    let max= count;
    for(let i=k; i<s.length; i++){
        if(vowel.includes(s[i])){
            count++
        }
        if(vowel.includes(s[i-k])){
            count--
        }
        max = Math.max(max, count)
    }
    return max
};