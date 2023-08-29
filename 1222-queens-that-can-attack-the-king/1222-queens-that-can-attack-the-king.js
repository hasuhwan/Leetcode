/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    const answer=[];
    const dir=[[1,0],[-1,0],[0,1],[0,-1],[1,-1],[1,1],[-1,1],[-1,-1]];
    const obj={};
    for(let i=0; i<8; i++){
        obj[i]=[];
    }
    queens.forEach(el=>{
        obj[el[0]].push(el[1]);
    })
    function dfs(direction,x,y){
        if(x<0||y<0||x>=8||y>=8){
            return;
        }
        if(obj[x].includes(y)){
            answer.push([x,y]);
            return;
        }
        dfs(direction,x+direction[0],y+direction[1]);
    }
    dir.forEach((el)=>{
        dfs(el,king[0],king[1]);
    });
    return answer;
};