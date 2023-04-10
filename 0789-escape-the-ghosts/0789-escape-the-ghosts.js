/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    const [targetY,targetX]=target;
   const playerCount=Math.abs(targetY)+Math.abs(targetX);
    
    for(let i=0; i<ghosts.length; i++){
        const [ghostY,ghostX]=ghosts[i];
        const ghostCount=Math.abs(ghostY-targetY)+Math.abs(ghostX-targetX);
        if(ghostCount<=playerCount){
            return false;
        }
    }
    
    return true;
};