/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    const queue=[];
    for(let i=0; i<target.length; i++){
        if(target[i]==="L"){
            queue.push(["L",i]);
        }else if(target[i]==="R"){
            queue.push(["R",i]);
        }
    }
    
    for(let i=0; i<start.length; i++){
        const temp=start[i];
        
        if(temp==="_"){
            continue;
        }
        if(queue.length===0){
            return false;
        }
        const first=queue.shift();
        if(temp!==first[0]||(temp==="L"&&first[1]>i)||(temp==="R"&&first[1]<i)){
                return false;
        }
    }
    return queue.length===0?true:false;
    
};