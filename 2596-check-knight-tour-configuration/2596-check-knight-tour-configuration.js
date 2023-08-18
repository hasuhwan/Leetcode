/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
    const n=grid.length;
    const dir=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2],[0,0]];
    function dfs(coor,val){
        console.log(coor,val);
        if(val===n*n){
            return true;
        }
        const [x,y]=coor;
        for(let i=0; i<dir.length; i++){
            const [nextx,nexty]=[x+dir[i][0],y+dir[i][1]];
            if(nextx<0||nexty<0||nextx>=n||nexty>=n||grid[nextx][nexty]!==val){
                continue;
            }
            if(dfs([nextx,nexty],val+1)){
                return true;
            }
        }
        return false;
    }
    return dfs([0,0],0);
    
};