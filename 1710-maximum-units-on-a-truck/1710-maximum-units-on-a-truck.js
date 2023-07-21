/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let answer=0;
    boxTypes.sort((a,b)=>b[1]-a[1]);
    for(let i=0; i<boxTypes.length; i++){
        const [box,val]=boxTypes[i];
        if(truckSize>=box){
            truckSize-=box;
            answer+=box*val;
        }else{
            
            answer+=truckSize*val;
            truckSize=0;
        }
        if(truckSize===0){
            return answer;
        }
    }
    return answer;
};