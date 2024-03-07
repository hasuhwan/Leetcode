/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let answer=0;
    const arr=[];
    for(let i=0; i<s.length; i++){
        arr.push(s[i]);
        if(arr.length===3){
            const set=new Set(arr);
            if(arr.length===set.size){
                answer++;
            }
            arr.shift();
        }
    }
    return answer;
};