var maxPower = function(s) {
    let output =1;
    let Power = 1;
    for(let i=0; i<s.length; i++){
        if(s[i] === s[i+1]){
           Power++
        }
        else{
            output = Math.max(output , Power);
            Power = 1;
        }
    }
    return output
};