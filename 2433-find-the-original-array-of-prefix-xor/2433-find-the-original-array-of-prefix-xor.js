/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    const answer=new Array(pref.length).fill(0);
    answer[0]=pref[0];
    for(let i=1; i<pref.length; i++){
        answer[i]=pref[i]^pref[i-1];
    }
    return answer;
    
};