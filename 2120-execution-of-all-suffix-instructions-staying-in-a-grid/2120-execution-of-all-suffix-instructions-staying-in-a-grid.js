/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    const answer=[];
    const obj={
        "R":[0,1],
        "L":[0,-1],
        "D":[1,0],
        "U":[-1,0],
    }
    for(let i=0; i<s.length; i++){
        let idx=i;
        let count=0;
        let nextX=obj[s[idx]][0]+startPos[0];
        let nextY=obj[s[idx]][1]+startPos[1];
        while(idx<s.length&&nextX>=0&&nextY>=0&&nextX<n&&nextY<n){
            idx++;
            count++;
            if(s[idx]===undefined){
                break;
            }
            nextX+=obj[s[idx]][0];
            nextY+=obj[s[idx]][1];
        }
        answer.push(count);
    }
    return answer;
};