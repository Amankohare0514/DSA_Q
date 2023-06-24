var isPalindrome = function(s) {
    let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    return newStr.split("").reverse().join("") === newStr;
}