/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const answer=new Array(2).fill().map(_=>[]);
    const map=new Map();
    matches.forEach(([win,lose])=>{
        if(!map.has(win)){
            map.set(win,0);
        }
        map.set(lose,(map.get(lose)||0)+1);
    });
    for(let [key,val] of map.entries()){
        if(val===0){
            answer[0].push(key);
        }else if(val===1){
            answer[1].push(key);
        }
    }
    return answer.map(arr=>arr.sort((a,b)=>a-b));
};