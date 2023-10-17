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
 * @return {number}
 */
var maxLevelSum = function(root) {
    let answer=[0,-Infinity];
    const depthMap=new Map();
    const queue=[[root,1]];
    while(queue.length!==0){
        const [node,depth]=queue.shift();
        if(!depthMap.has(depth)){
            depthMap.set(depth,0);
        }
        depthMap.set(depth,depthMap.get(depth)+node.val);
        if(node.left!==null){
            queue.push([node.left,depth+1]);
        }
        if(node.right!==null){
            queue.push([node.right,depth+1]);
        }
    }
    for(let [k,v] of depthMap.entries()){
        if(v>answer[1]){
            answer=[k,v];
        }
    }
    return answer[0];
    
};