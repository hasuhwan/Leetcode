/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let answer=0;
    let index=1;
    plants=[0,...plants];
    console.log(plants);
    let temp=capacity;
    while(index<plants.length){
        if(temp>=plants[index]){
            temp-=plants[index];
            index++;
            answer++;
        }else{
            temp=capacity;
            answer+=index*2-2;
        }
        console.log(answer);
    }
    return answer;
};