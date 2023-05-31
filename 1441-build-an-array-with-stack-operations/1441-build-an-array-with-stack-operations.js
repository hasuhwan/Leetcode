/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const arr=Array.from({length:n},(_,idx)=>idx+1);
    const answer=[];
    const temp=[];
    let idx=0;
    while(idx<target.length){
        answer.push("Push");
        temp.push(arr.shift());
        if(temp[idx]!==target[idx]){
            answer.push("Pop");
            temp.pop();
        }else{
            idx++;
        }
    }
    return answer;
};