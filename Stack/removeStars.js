var removeStars = function(s) {
    const letters = [];
    for(let i=0; i<s.length; i++)
    s[i] === "*" ? letters.pop() : letters.push(s[i]);
    return letters.join(""); 
 };