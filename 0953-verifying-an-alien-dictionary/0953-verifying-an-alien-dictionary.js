/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map=new Map();
    order.split("").forEach((al,idx)=>{
        map.set(al,idx);
    });
    const temp=[...words].sort((a,b)=>{
        let idx=0;
        let currA=a[idx];
        let currB=b[idx];
        while(currA===currB&&idx<a.length&&idx<b.length){
            idx++;
            currA=a[idx];
            currB=b[idx];
        }
        if(currA===currB){
            return 1;
        }
        if(currA===undefined){
            return -1;
        }
        if(currB===undefined){
            return 1;
        }
        return map.get(currA)-map.get(currB);
    });
    for(let i=0; i<temp.length; i++){
        if(temp[i]!==words[i]){
            return false;
        }
    }
    return true;
};