/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
    
    let answer=0;
    const obj={};
    return values.map((el,idx)=>{
        if(!obj[labels[idx]]){
            obj[labels[idx]]=0;
        }
        return [el,labels[idx]]}).sort((a,b)=>b[0]-a[0]).filter(el=>{
        if(obj[el[1]]===useLimit){
            return false;
        }else{
            obj[el[1]]++;
            return true;
        }
    }).slice(0,numWanted).reduce((acc,cur)=>acc+cur[0],0);

    
};