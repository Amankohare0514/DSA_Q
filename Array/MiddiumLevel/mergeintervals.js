var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    for(let i=1; i<intervals.length ; i++){
        let [x,y] = intervals[i];
        let [prevX , prevY]= intervals[i-1]
        if(x <= prevY){
            intervals[i-1][1] = Math.max(y,prevY);
            intervals.splice(i,1);
            i--
        }
    }
    return intervals
};