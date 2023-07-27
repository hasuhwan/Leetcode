/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    const answer=[];
    keyTime=keyTime.map((el,idx)=>{
        const [hour,minute]=el.split(":");
        const temp=Number(hour)*60+Number(minute);
        return temp;
    });
    const obj={};
    keyTime.forEach((el,idx)=>{
        obj[keyName[idx]]=(obj[keyName[idx]]||[]).concat(el);
    });
    Object.entries(obj).forEach((el)=>{
        const [name,values]=el;
        values.sort((a,b)=>a-b);
        if(values.length>2){
            for(let i=2; i<values.length; i++){
              
                if(values[i]-values[i-2]<=60){
                    answer.push(name);
                    return;
                }
            }
        }
    });
    return answer.sort();
};