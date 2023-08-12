/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    let val = '';
    for(const word of words) {
        let i = 1;
        for(; i<word.length ; i++)
        if(!words.includes(word.substring(0,i))){
            break;
        }
        if(i === word.length && word.length > val.length) val = word;
    }
    return val
};