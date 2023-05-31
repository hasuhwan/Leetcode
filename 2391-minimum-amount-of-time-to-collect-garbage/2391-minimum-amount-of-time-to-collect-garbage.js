/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let answer=0;
    travel=[0,...travel];
    accTravel=new Array(travel.length).fill(0);
    for(let i=1; i<travel.length; i++){
        accTravel[i]=accTravel[i-1]+travel[i];
    }
    
    const gar=["M","G","P"];
    const count=garbage.map(el=>el.split("")).flat();
    answer+=count.length;
    gar.forEach(tar=>{
        let index=0;
        garbage.forEach((el,idx)=>{
            if(el.includes(tar)){
                index=idx;
            }
        });
        answer+=accTravel[index];
    })
    return answer;
};