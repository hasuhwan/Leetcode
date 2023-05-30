/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const obj={};
    s=s.split(" ");
    if(pattern.length!==s.length){
        return false;
    }
    for(let i=0; i<pattern.length; i++){
        if(obj[pattern[i]]===undefined){
            obj[pattern[i]]=s[i];
        }else{
            if(obj[pattern[i]]!==s[i]){
                return false;
            }
        }
    }
    const values=Object.values(obj);
    if(new Set(values).size!==values.length){
        return false;
    }
    return true;
};