/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function(jug1Capacity, jug2Capacity, targetCapacity) {
    if(jug1Capacity+ jug2Capacity<= targetCapacity){
        return jug1Capacity+jug2Capacity===targetCapacity;
    }
    const stack=[0];
    const set=new Set();
    while(stack.length!==0){
        const temp=stack.pop();
        if(temp===targetCapacity){
            return true;
        }
        if(set.has(temp)||temp>jug1Capacity+jug2Capacity||temp<0){
            continue;
        }
        set.add(temp);
        stack.push(temp+jug1Capacity);
        stack.push(temp+jug2Capacity);
        stack.push(temp-jug1Capacity);
        stack.push(temp-jug2Capacity);
    }
    return false;
};