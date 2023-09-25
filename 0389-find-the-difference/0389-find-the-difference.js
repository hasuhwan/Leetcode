/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map=new Map();
    for(let char in s){
        map.set(s[char],(map.get(s[char])||0)+1);
    }
    for(let char in t){
        if(map.has(t[char])&&map.get(t[char])!==0){
            map.set(t[char],map.get(t[char])-1);
        }else{
            return t[char];
        }
    }
};