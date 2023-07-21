/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
    const obj={};
    edges.forEach((to,from)=>{
        obj[to]=(obj[to]||0)+from;
    });
   const arr=Object.entries(obj).map(el=>[Number(el[0]),el[1]]).sort((a,b)=>{
       if(a[1]===b[1]){
           return a[0]-b[0];
       }else{
           return b[1]-a[1];
       }
   });
    return arr[0][0];
};