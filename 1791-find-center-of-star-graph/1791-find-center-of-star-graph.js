/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const obj={};
    
    for(let i=0; i<edges.length; i++){
        const [one,two]=edges[i];
        if(obj[one]){
            return one;
        }
        if(obj[two]){
            return two;
        }
        obj[one]=1;
        obj[two]=1;
    }
};