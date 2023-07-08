/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    let answer=0;
    const len=bombs.length;
    for(let i=0; i<len; i++){
        const queue=[bombs[i]];
        const visited=new Array(len).fill(false);
        let count=0;
        visited[i]=true;
        while(queue.length!==0){
            const [x,y,r]=queue.shift();
            count++;
            bombs.forEach(([bx,by,br],idx)=>{
                if(!visited[idx]&&Math.pow(bx-x,2)+Math.pow(by-y,2)<=Math.pow(r,2)){
                    visited[idx]=true;
                    queue.push([bx,by,br]);
                }
            })
        }
        answer=Math.max(answer,count);
    }
    return answer;
};