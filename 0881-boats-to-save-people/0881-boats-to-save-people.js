/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let answer=0;
    let left=0;
    let right=people.length-1;
    people.sort((a,b)=>a-b);
    while(left<=right){
        if(left===right){
        return answer+1;    
        }
        
        const temp= people[left]+people[right];
        if(temp>limit){
            answer++;
            right--;
        }else{
            answer++;
            left++;
            right--;
        }
    }
    return answer;
};