class Solution {
    // Function to return the adjacency list for each vertex.
    printGraph(V, adj) {
     let arr = new Array(V);
     for(let i=0; i<arr.length ; i++) {
        arr[i] = [i];
        for(let j=0; i<adj[i] ; i++){
            arr[i].push(adj[i][j]);
        }
     } 
       return  arr;
    }
}


// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[][]}
*/
class Solution {
    // Function to return the adjacency list for each vertex.
    printGraph(V, adj) {
        let arr = new Array(V);
        for(let i=0;i<arr.length;i++)
        {
            arr[i]=[i]; 
           for(let j=0;j<adj[i].length;j++)
           {
               arr[i].push(adj[i][j]);
           }
            
        }
        return arr;
    }
}