var spiralOrder = function(matrix) {  
    let r= matrix.length , c = matrix[0].length;
    let [left , right , top , bottom] = [0 , c-l , 0 , r-1];
    let arr=[];
    while(left<= right && top<= bottom){
        for(let i=left ; i<= right; i++){
            arr.push(matrix[top][i])
            top++;
        }
        for(let i=top; i<= bottom; i++){
            arr.push(matrix[i][right])
            right--;
        }

        //1st condition
        if(top<= bottom)
        for(let i=right ; i>= left; i--){
            arr.push(matrix[bottom][i])
            bottom--;
        }
        if(left<= right)
        for(let i=bottom; i>= top; i--){
            arr.push(matrix[i][left])
            left--;
        }
    }
    return arr
  }