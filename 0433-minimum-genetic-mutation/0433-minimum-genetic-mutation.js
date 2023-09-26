/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const visited=new Array(bank.length).fill(false);
    const queue=[[startGene,0]];
    while(queue.length!==0){
        const [temp,count]=queue.shift();
        if(temp===endGene){
            return count;
        }
        bank.forEach((str,idx)=>{
            let diff=0;
            if(visited[idx]===true){
                return;
            }
            for(let i=0; i<str.length; i++){
                if(str[i]!==temp[i]){
                    diff++;
                }
                if(diff>=2){
                    return;
                }
            }
            if(diff===1){
                queue.push([str,count+1]);
                visited[idx]=true;
            }
        })
    }
    return -1;
};