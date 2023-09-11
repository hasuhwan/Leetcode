/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const obj={};
    words.forEach((str)=>{
        if(obj[str]){
            obj[str]++;
        }else{
            obj[str]=1;
        }
    });
    return Object.entries(obj).sort((a,b)=>{
        if(a[1]===b[1]){
    
            return a[0]<b[0]?-1:1;
        }else{
            return b[1]-a[1];
        }
    }).map(el=>el[0]).slice(0,k);
};