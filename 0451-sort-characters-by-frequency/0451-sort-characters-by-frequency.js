/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let answer="";
    const map=new Map();
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1);
        }else{
            map.set(s[i],1);
        }
    }
const arr=[...map.entries()].sort((a,b)=>b[1]-a[1]);
   arr.forEach(el=>{
       answer+=el[0].repeat(el[1]);
   });
    return answer;
    
    
};