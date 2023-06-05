/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    const sum=skill.reduce((acc,cur)=>acc+cur,0)/skill.length*2;
    let answer=0;
    skill.sort((a,b)=>a-b);
    const last=skill.length-1;
    for(let i=0; i<skill.length/2; i++){
        if(skill[i]+skill[last-i]!==sum){
            return -1;
        }
        answer+=skill[i]*skill[last-i];
    }
    return answer;
};