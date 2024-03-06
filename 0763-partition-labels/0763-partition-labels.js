/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const answer=[];
    const map=new Map();
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            const [start,end]=map.get(s[i]);
            map.set(s[i],[start,i]);
        }else{
            map.set(s[i],[i,i]);
        }
    }
    for(let i=0; i<s.length; i++){
        let [start,end]=map.get(s[i]);
        while(i<end){
            const [nextStart,nextEnd]=map.get(s[i]);
            if(nextEnd>end){
                end=nextEnd;
            }
            i++;
        }
        answer.push(end-start+1);
        i=end;
    }
    return answer;
};