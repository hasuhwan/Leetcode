/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let answer="";
    const regexp = /(\([^)]+\)|\b\w+\b)/g;
    const arr=s.match(regexp);
    const map=new Map();
    knowledge.forEach(([key,value])=>{
        map.set(key,value);
    });
    return arr.reduce((acc,cur)=>{
        if(cur[0]==="("){
            const str=cur.slice(1,cur.length-1);
            if(map.has(str)){
                return acc+map.get(str);
            }
            return acc+"?";
        }
        return acc+cur;
    },"");
};