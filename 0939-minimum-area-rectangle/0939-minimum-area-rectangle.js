/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    let answer=Infinity;
    const obj={};
    points.forEach(([x,y])=>{
        if(!obj[x]){
            obj[x]={};
        }
        obj[x][y]=true;
    });
    
    for(let [x1,y1] of points){
        for(let [x2,y2] of points){
            if(x1!==x2&&y1!==y2&&obj[x1][y2]&&obj[x2][y1]){
                answer=Math.min(answer,Math.abs(x2-x1)*Math.abs(y2-y1));
            }
        }
    }
    return answer===Infinity?0:answer;
};