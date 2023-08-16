/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const m=image.length;
    const n=image[0].length;
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    const visited=new Array(m).fill(0).map(()=>new Array(n).fill(false));
    const standard=image[sr][sc];
    const queue=[[sr,sc]];
    while(queue.length!==0){
        const [x,y]=queue.shift();
        image[x][y]=color;
        visited[x][y]=true;
        dir.forEach(([dirx,diry])=>{
            const [nextx,nexty]=[dirx+x,diry+y];
            if(nextx<0||nexty<0||nextx>=m||nexty>=n||image[nextx][nexty]!==standard||visited[nextx][nexty]===true){
                return;
            }
            queue.push([nextx,nexty]);
        });
    }
    return image;
};