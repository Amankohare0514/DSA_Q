/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let fil = s.split(' ').filter(word=>word!=='');
    return fil.reverse().join(' ')
};