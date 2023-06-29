/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const answer=[];
    const one=s1.split(" ");
    const two=s2.split(" ");
    const sum=one.concat(two);
    const map=new Map();
    sum.forEach(el=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1);
        }else{
            map.set(el,1);
        }
    })
    for(let el of map){
        const [name,val]=el;
        if(val===1){
            answer.push(name);
        }
    }
    return answer;
    
    
};