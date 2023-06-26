/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const diff=[];
    for(let i=0; i<s1.length; i++){
        if(s1[i]!==s2[i]){
            diff.push(i);
        }
    }
    if(diff.length>2){
        return false;
    }
    const [one,two]=diff;
    return s1[one]===s2[two]&&s1[two]===s2[one];
};