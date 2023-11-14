/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const set=new Set();
    const map=new Map();
    for(let i=0; i<s.length; i++){
        if(!map.has(s[i])){
            map.set(s[i],[i]);
        }else{
            map.get(s[i])[1]=i;
        }
    }
    for(let [key,arr] of map.entries()){
        if(arr.length===2){
            for(let i=arr[0]+1; i<arr[1]; i++){
                set.add(key+s[i]+key);
            }
        }
    }
    return set.size;
};