/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let answer=0;
    const obj={};
    tasks.forEach(el=>{
        obj[el]=(obj[el]||0)+1;
    });
    const countArr=Object.entries(obj).sort((a,b)=>a[0]-b[0]).map(el=>el[1]);
    function check(temp){
         if(temp===1){
            return false;
        }else if(temp===2||temp===3){
            answer++;
        }else{
            answer+=2;
        }
        return true;
    }
    for(let i=0; i<countArr.length; i++){
        let temp=countArr[i];
        if(temp<=4){
            if(!check(temp)){
                return -1;
            }
        }else{
            while(temp>4){
                temp-=3;
                answer++;
            }
            if(!check(temp)){
                return -1;
            }
        }
    }
    return answer;
};