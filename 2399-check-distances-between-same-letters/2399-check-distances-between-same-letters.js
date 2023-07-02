/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const map=new Map();
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            map.set(s[i],i-map.get(s[i])-1);
        }else{
            map.set(s[i],i);
        }
    }
    for(let el of map){
        const [al,val]=el;
        if(distance[al.charCodeAt()-97]!==val){
            return false;
        }
    }
    return true;
};