/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const answer=[];
    const pMap=new Map();
    const sMap=new Map();
    const pLen=p.length;
    const sLen=s.length;
    for(let char in p){
        pMap.set(p[char],(pMap.get(p[char])||0)+1);
    }
    for(let i=0; i<=sLen; i++){
        if(i>=pLen){
            if(sMap.get(s[i-pLen])===1){
                sMap.delete(s[i-pLen]);
            }else{
                sMap.set(s[i-pLen],sMap.get(s[i-pLen])-1);    
            }
        }
        sMap.set(s[i],(sMap.get(s[i])||0)+1);
        if(sMap.size===pMap.size){
            let bool=true;
            for(let [char,value] of pMap.entries()){
                if(value!==sMap.get(char)){
                    bool=false;
                    break;
                }
            }
            if(bool){
                answer.push(i-pLen+1);
            }
        }
    }
    return answer;
};