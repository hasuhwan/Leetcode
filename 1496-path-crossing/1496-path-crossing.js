/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const map=new Map([["0-0",true]]);
    const obj={
        "N":[0,1],
        "S":[0,-1],
        "E":[1,0],
        "W":[-1,0]
    };
    let [x,y]=[0,0];
    for(let dir of path){
      const [dirx,diry]=obj[dir];
        const[nextx,nexty]=[x+dirx,y+diry];
        const str=nextx+"-"+nexty;
        if(map.has(str)){
            return true;
        }
        map.set(str,true);
        [x,y]=[nextx,nexty];
    }
    return false;
};