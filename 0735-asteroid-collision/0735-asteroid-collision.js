/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const answer=[];
    const plus=[];
    asteroids.forEach(el=>{
        if(el<0){
            if(plus.length===0){
                answer.push(el);
            }else{
                let temp=plus[plus.length-1];
                while(temp&&plus.length!==0){
                    if(temp+el===0){
                    plus.pop();
                        return;
                    }else if(temp+el>0){
                        break;
                    }else{
                        plus.pop();
                        temp=plus[plus.length-1];
                    }
                }
                if(plus.length===0){
                    answer.push(el);
                }
            }
        }else{
            plus.push(el);
        }
    });

    return answer.concat(plus);
   
};