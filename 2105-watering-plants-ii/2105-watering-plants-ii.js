/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
    let answer=0;
    let a=capacityA;
    let b=capacityB;
    
    for(let i=0; i<Math.ceil(plants.length/2); i++){
        console.log(a,b,i);
        if(i===plants.length-1-i){
            if(plants[i]>a&&plants[i]>b){
                answer++;
            }
            continue;
        }
        if(plants[i]>a){
            answer++;
            a=capacityA;
        }
        a-=plants[i];
        if(plants[plants.length-1-i]>b){
            answer++;
            b=capacityB;
        }
        b-=plants[plants.length-1-i];
    }
    return answer;
};