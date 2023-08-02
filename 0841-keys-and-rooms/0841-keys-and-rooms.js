/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited=new Array(rooms.length).fill(false);
    visited[0]=true;
    
    const queue=[rooms[0]];
    while(queue.length!==0){
        const keys=queue.shift();
        keys.forEach(key=>{
            if(!visited[key]){
                visited[key]=true;
                queue.push(rooms[key]);
            }
        })
    }
    return visited.every(el=>el===true);
};