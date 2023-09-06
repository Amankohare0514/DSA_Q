if(!s) return true;
let count = 0;
for(let i=0; i<t.length; i++){
    if(t[i] === s[count]) count++;
    if(count === s.length) return true
}
return false
};