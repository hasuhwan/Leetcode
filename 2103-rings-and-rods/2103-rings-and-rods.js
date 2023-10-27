/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let answer=0;
    const map=new Map();
    for(let i=0; i<rings.length; i+=2){
        const [color,pos]=[rings[i],rings[i+1]];
        if(!map.has(pos)){
            map.set(pos,new Set());
        }
        map.get(pos).add(color);
    };
    for(let value of map.values()){
        if(value.size===3){
            answer++;
        }
    }
    return answer;
    
};