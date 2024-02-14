/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
    let answer=0;
    const map=new Map();
    tasks.forEach(task=>{
        
        if(!map.has(task)){
            map.set(task,++answer);
        }else{
            const prev=map.get(task);
            if(answer-prev<space){
                answer=prev+space+1;
                map.set(task,answer);
            }else{
                map.set(task,++answer);
            }
        }
    });
    
    return answer;
};