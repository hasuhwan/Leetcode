/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let answer=0;
    const map=new Map();
    words.forEach(str=>{
        const temp=[...new Set(str.split("").sort())].join("");
        map.set(temp,(map.get(temp)||0)+1);
    });
    for(let val of map.values()){
        if(val>1){
            answer+=val*(val-1)/2;
        }
    }
    return answer;
};
    