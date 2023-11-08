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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    const map=new Map();
    const map2=new Map();
    const set=new Set();
    const queue=[root];
    while(queue.length!==0){
        const node=queue.shift();
        if(node.left){
            queue.push(node.left);
            map.set(node.val,(map.get(node.val)||[]).concat(node.left.val));
            map.set(node.left.val,(map.get(node.left.val)||[]).concat(node.val));
        }
         if(node.right){
            queue.push(node.right);
            map.set(node.val,(map.get(node.val)||[]).concat(node.right.val));
            map.set(node.right.val,(map.get(node.right.val)||[]).concat(node.val));
        }
    }
    const queue2=[[start,0]];
    if(map.size===0){
        return 0;
    }
    while(queue2.length!==0){
        const [target,dep]=queue2.shift();
        if(!map2.has(dep)){
            map2.set(dep,[]);
        }
        map2.get(dep).push(target);
        set.add(target);
        const next=map.get(target);
        next.filter((el)=>!set.has(el)).forEach(node=>{
            queue2.push([node,dep+1]);
        })
        
    }
    return map2.size-1;
};