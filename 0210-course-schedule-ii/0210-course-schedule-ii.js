/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const answer=[];
    const arr=new Array(numCourses).fill(0).map(()=>[]);
const count=new Array(numCourses).fill(0);
    prerequisites.forEach(([after,before])=>{
        arr[before].push(after);
        count[after]++;
    })
const queue=[];
count.forEach((el,idx)=>{
    if(el===0){
        queue.push(idx);
    }
})
    while(queue.length!==0){
        const temp=queue.shift();
        answer.push(temp);
        arr[temp].forEach(el=>{
            count[el]--;
            if(count[el]===0){
                queue.push(el);
            }
        })
    }
    return answer.length!==numCourses?[]:answer;
};