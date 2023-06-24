var rotate = function(matrix) {
    for(let i=0;  i<matrix.length; i++){
        for(let j=i+1; j<matrix[0].length; j++){
            temp = matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
        }
    }
    for(let i=0;  i<matrix.length; i++){
        matrix[i].reverse();
    }
}