/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let back="";
    for(let i=0; i<s.length; i++){
        back+=s[i];
        const temp=s.slice(i+1)+back;
        if(goal===temp){
            return true;
        }
    }
    return false;
};