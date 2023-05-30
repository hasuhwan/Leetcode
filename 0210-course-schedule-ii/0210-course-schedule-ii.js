/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const answer=[];
    const arr=new Array(numCourses).fill(0).map(()=>[]);
    const visited=new Array(numCourses).fill(false);
    prerequisites.forEach(([after,before])=>{
        arr[after].push(before);
    })
const queue=[];
arr.forEach((el,idx)=>{
    if(el.length===0){
        queue.push(idx);
        visited[idx]=true;
    }
});
    while(queue.length!==0){
        const temp=queue.shift();
        answer.push(temp);
        arr.forEach((el,idx)=>{
            arr[idx]=arr[idx].filter(el=>el!==temp);
            if(arr[idx].length===0&&visited[idx]===false){
                queue.push(idx);
                visited[idx]=true;
            }
        })
    }
    return answer.length!==numCourses?[]:answer;
};