/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const map=new Map();
    for(let i=0; i<s.length; i++){
        if(!map.get(s[i])){
            map.set(s[i],1);
        }else{
            return s[i];
        }
    }
};