/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
    let answer=0;
    rungs=[0,...rungs];
    const arr=[];
    for(let i=1; i<rungs.length; i++){
arr.push(rungs[i]-rungs[i-1]);
    }
    arr.forEach(el=>{
        const temp=Math.ceil(el/dist);
        answer+=Math.max(0,temp-1);
    })
    return answer;
};