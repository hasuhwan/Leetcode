/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const start=target.val;
    const map=new Map();
    const map2=new Map();
    const set=new Set();
    const queue=[root];
    while(queue.length!==0){
        const node=queue.shift();
        if(!map.has(node.val)){
            map.set(node.val,[]);
        }
        if(node.left){
            queue.push(node.left);
            map.get(node.val).push(node.left.val);
            map.set(node.left.val,(map.get(node.left.val)||[]).concat(node.val));
        }
         if(node.right){
            queue.push(node.right);
             map.get(node.val).push(node.right.val);
            map.set(node.right.val,(map.get(node.right.val)||[]).concat(node.val));
        }
    }
    const queue2=[[start,0]];
   
    while(queue2.length!==0){
        const [from,dep]=queue2.shift();
        if(!map2.has(dep)){
            map2.set(dep,[]);
        }
        map2.get(dep).push(from);
        set.add(from);
        const next=map.get(from);
        next.filter((el)=>!set.has(el)).forEach(node=>{
            queue2.push([node,dep+1]);
        })
        
    }
    return map2.get(k)?map2.get(k):[];
};