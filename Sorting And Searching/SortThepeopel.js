/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for(let i=0; i<heights.length ; i++){
        for(let j=0; j<heights.length-i; j++){
            if(heights[j] < heights[j+1]){
                temp = heights[j];
                heights[j]=heights[j+1];
                heights[j+1]= temp;
                camp=names[j];
                names[j]=names[j+1];
                names[j+1]=camp;
            }
        }
    }
    return names
};