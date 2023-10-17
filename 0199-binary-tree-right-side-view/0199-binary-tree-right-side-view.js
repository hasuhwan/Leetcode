/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    const answer=[],depthObj={};
    if(root===null){
        return answer;
    }
    const queue=[[root,0]];
    while(queue.length!==0){
        const [node,depth]=queue.shift();
        if(!depthObj[depth]){
            depthObj[depth]=[];
        }
        depthObj[depth].push(node.val);
        if(node.left!==null){
            queue.push([node.left,depth+1]);
        }
        if(node.right!==null){
            queue.push([node.right,depth+1]);
        }
    }
    Object.entries(depthObj).sort((a,b)=>Number(a[0])-Number(b[0])).forEach(([k,arr])=>{
        answer.push(arr[arr.length-1]);
    })
    return answer;
};