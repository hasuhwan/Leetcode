/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let answer=0;
    const edges=[];
    const par=new Array(points.length).fill(0).map((_,idx)=>idx);
    for(let i=0; i<points.length-1; i++){
        const [x,y]=points[i];
        for(let j=i+1; j<points.length; j++){
            const temp=Math.abs(x-points[j][0])+Math.abs(y-points[j][1]);
            edges.push([i,j,temp]);
        }
    }
    
    function getParent(temp){
        if(par[temp]===temp){
            return temp;
        }else{
            const val=getParent(par[temp]);
            par[temp]=val
            return val;
        }
    }
    
    function unionFind(one,two){
        const a=getParent(one);
        const b=getParent(two);
        if(a===b){
            return false;
        }else{
            if(a>b){
                par[a]=par[b]
            }else{
                par[b]=par[a];
            }
            return true;
        }
    }
    edges.sort((a,b)=>a[2]-b[2]);
   edges.forEach(([one,two,cost])=>{
       if(unionFind(one,two)){
           answer+=cost;
       }
   })
    return answer;
    
};