/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */

var furthestBuilding = function(heights, bricks, ladders) {
    const diffStack=[];
    function insert(num){
    for(let i = 0; i < diffStack.length; i++) {
            if(diffStack[i] > num) {
                diffStack.splice(i, 0, num);
                return;
            }
        }
        diffStack.push(num);
    }
    for(let i=0; i<heights.length-1; i++){
        const temp=heights[i];
        const next=heights[i+1];
        const diff=next-temp;
        if(diff<=0){
            continue;
        }else{
            insert(diff);
            let sum=0;
            for(let i=0; i<diffStack.length-ladders; i++){
                sum+=diffStack[i];
            }
            if(sum>bricks){
                return i;
            }
        }
    }
    return heights.length-1;
};