/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []; 
    for (let c of s) { 
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c); // push it onto the stack
        } else { // if the character is a closing bracket
            if (!stack.length || // if the stack is empty or 
                (c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                return false; // the string is not valid, so return false
            }
            stack.pop();
        }
    }
    return !stack.length; 
};