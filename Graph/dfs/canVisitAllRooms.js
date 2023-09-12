var canVisitAllRooms = function(rooms) {
    const length = rooms.length;
    const visited = Array(length);
    let visitedCount = 0;

    function dfs(index) {
       visited[index] = true;
       visitedCount++
       return rooms[index].some(index=>!visited[index] && dfs(index))
    }
    dfs(0)
    return  visitedCount === length
};